@echo off
start "No conformidades" /min powershell -NoProfile -ExecutionPolicy Bypass -File "%~dp0servidor.ps1" -Puerto 8092 -Abrir -Inicio "/"
exit
