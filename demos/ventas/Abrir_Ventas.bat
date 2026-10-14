@echo off
start "Ventas y stock" /min powershell -NoProfile -ExecutionPolicy Bypass -File "%~dp0servidor.ps1" -Puerto 8093 -Abrir -Inicio "/"
exit
