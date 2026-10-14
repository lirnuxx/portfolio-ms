# Sincroniza _src/shared en cada demo y regenera descargas/*.zip. Uso: python _src/build.py
import pathlib,zipfile
P=pathlib.Path(__file__).resolve().parent.parent;D=P/'demos';S=P/'_src'/'shared'
(P/'descargas').mkdir(exist_ok=True)
(P/'i18n.js').write_bytes((S/'i18n.js').read_bytes())
for d in ('produccion','noconformidades','ventas'):
    for n in ('comun.css','comun.js','fx.css','fx.js','i18n.js','servidor.ps1'):
        (D/d/n).write_bytes((S/n).read_bytes())
    with zipfile.ZipFile(P/'descargas'/f'{d}.zip','w',zipfile.ZIP_DEFLATED) as z:
        for f in sorted((D/d).rglob('*')):
            if f.is_file(): z.write(f,f'{d}/'+f.relative_to(D/d).as_posix())
print('ok')
