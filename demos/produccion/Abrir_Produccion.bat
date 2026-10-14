@echo off
start "Produccion y OEE" /min powershell -NoProfile -ExecutionPolicy Bypass -File "%~dp0servidor.ps1" -Puerto 8091 -Abrir -Inicio "/"
exit
