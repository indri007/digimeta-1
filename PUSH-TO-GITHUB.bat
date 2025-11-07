@echo off
echo ========================================
echo   PUSH DIGIMETASHOP KE GITHUB
echo ========================================
echo.
echo Pastikan Anda sudah:
echo 1. Buat repository baru di https://github.com/new
echo 2. Nama repo: digimetashop-nextjs
echo 3. Akun: indri007
echo.
pause
echo.
echo Menghapus remote lama...
git remote remove origin 2>nul
git remote remove indri007 2>nul
echo.
echo Menambahkan remote baru...
git remote add origin https://github.com/indri007/digimetashop-nextjs.git
echo.
echo Mencoba push ke GitHub...
echo (Akan muncul popup login GitHub)
echo.
git push -u origin main
echo.
if %ERRORLEVEL% EQU 0 (
    echo ========================================
    echo   BERHASIL! Repository sudah di GitHub
    echo ========================================
    echo.
    echo Buka: https://github.com/indri007/digimetashop-nextjs
    echo.
) else (
    echo ========================================
    echo   ERROR! Push gagal
    echo ========================================
    echo.
    echo Solusi:
    echo 1. Pastikan repo sudah dibuat di GitHub
    echo 2. Atau gunakan GitHub Desktop
    echo.
)
pause
