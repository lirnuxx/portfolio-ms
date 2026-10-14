# Servidor web minimo con PowerShell (viene con Windows, no requiere instalar nada).
# Sirve los sistemas y permite guardar CSV solo dentro de carpetas "datos".
# Uso: doble clic en el Abrir_*.bat de cada demo. Para que otras PCs accedan, ejecutar como Administrador.
param([int]$Puerto = 8090, [string]$Inicio = "/", [switch]$Abrir)
$Raiz = [IO.Path]::GetFullPath($PSScriptRoot).TrimEnd('\') + '\'
$tipos = @{ '.html'='text/html; charset=utf-8'; '.css'='text/css; charset=utf-8'; '.js'='text/javascript; charset=utf-8'; '.csv'='text/csv; charset=utf-8';
  '.json'='application/json; charset=utf-8'; '.png'='image/png'; '.ico'='image/x-icon'; '.svg'='image/svg+xml' }
function Enviar($res, [string]$txt, [int]$codigo) {
  $res.StatusCode = $codigo; $res.ContentType = 'text/plain; charset=utf-8'
  $b = [Text.Encoding]::UTF8.GetBytes($txt); $res.ContentLength64 = $b.Length; $res.OutputStream.Write($b, 0, $b.Length)
}
$l = New-Object System.Net.HttpListener
try { $l.Prefixes.Add("http://+:$Puerto/"); $l.Start(); $red = $true }
catch {
  try { $l = New-Object System.Net.HttpListener; $l.Prefixes.Add("http://localhost:$Puerto/"); $l.Start(); $red = $false }
  catch {
    if ($Abrir) { Start-Process "http://localhost:$Puerto$Inicio" } else { Write-Host "No se pudo iniciar en el puerto $Puerto. Puede que ya este en uso." -ForegroundColor Red }
    exit
  }
}
if ($red) { Write-Host "Disponible en la red: http://$($env:COMPUTERNAME):$Puerto/" -ForegroundColor Green }
else { Write-Host "Solo esta PC: http://localhost:$Puerto/  (para la red, ejecutar como Administrador)" -ForegroundColor Yellow }
Write-Host "Cerrar esta ventana para detener (se cierra sola tras 30 min sin uso)."
if ($Abrir) { Start-Process "http://localhost:$Puerto$Inicio" }
$ult = Get-Date; $tarea = $null
while ($l.IsListening) {
  if ($null -eq $tarea) { $tarea = $l.GetContextAsync() }
  if (-not $tarea.Wait(30000)) { if (((Get-Date) - $ult).TotalMinutes -gt 30) { break }; continue }
  $ctx = $tarea.Result; $tarea = $null; $ult = Get-Date; $res = $ctx.Response
  try {
    $ruta = [Uri]::UnescapeDataString($ctx.Request.Url.AbsolutePath)
    $res.Headers.Add('Cache-Control', 'no-store')
    if ($ruta -ieq '/guardar' -and $ctx.Request.HttpMethod -eq 'POST') {
      $rel = $ctx.Request.QueryString['f']
      $ok = $false
      if ($rel) {
        $dest = [IO.Path]::GetFullPath((Join-Path $Raiz $rel))
        $ok = $dest.StartsWith($Raiz, [StringComparison]::OrdinalIgnoreCase) -and ([IO.Path]::GetExtension($dest) -ieq '.csv') -and ($ctx.Request.Headers['X-Requested-With'] -eq 'demo') -and ((Split-Path (Split-Path $dest -Parent) -Leaf) -ieq 'datos') -and ($ctx.Request.ContentLength64 -lt 2097152)
      }
      if ($ok) {
        $sr = New-Object IO.StreamReader($ctx.Request.InputStream, [Text.Encoding]::UTF8)
        $txt = $sr.ReadToEnd(); $sr.Dispose()
        [IO.File]::WriteAllText($dest, $txt, (New-Object Text.UTF8Encoding $true))
        Enviar $res 'ok' 200
      } else { Enviar $res 'ruta no permitida' 403 }
    } else {
      if ($ruta.EndsWith('/')) { $ruta += 'index.html' }
      $f = [IO.Path]::GetFullPath((Join-Path $Raiz $ruta.TrimStart('/')))
      if ($f.StartsWith($Raiz, [StringComparison]::OrdinalIgnoreCase) -and (Test-Path -LiteralPath $f -PathType Leaf) -and ([IO.Path]::GetFileName($f) -notmatch '\.(ps1|bat|config)$')) {
        $ext = [IO.Path]::GetExtension($f).ToLower()
        $res.ContentType = if ($tipos.ContainsKey($ext)) { $tipos[$ext] } else { 'application/octet-stream' }
        if ($ctx.Request.HttpMethod -ne 'HEAD') {
          $fs = [IO.File]::Open($f, 'Open', 'Read', 'ReadWrite')
          try { $res.ContentLength64 = $fs.Length; $fs.CopyTo($res.OutputStream) } finally { $fs.Dispose() }
        }
      } else { $res.StatusCode = 404 }
    }
  } catch { try { $res.StatusCode = 500 } catch {} }
  finally { $res.Close() }
}
$l.Stop()
