Add-Type -AssemblyName System.Windows.Forms
Add-Type -AssemblyName System.Drawing
\ = Get-Process msedge -ErrorAction SilentlyContinue
\ = foreach (\ in \) {
    if (\.MainWindowTitle -match 'Jianqiang') { \ = \; break }
}
if (\) {
    [Microsoft.VisualBasic.Interaction]::AppActivate(\.Id)
    Start-Sleep -Milliseconds 800
    [System.Windows.Forms.SendKeys]::SendWait('^+{R}')
    Start-Sleep -Seconds 3
}
\ = New-Object System.Drawing.Bitmap([System.Windows.Forms.Screen]::PrimaryScreen.Bounds.Width, [System.Windows.Forms.Screen]::PrimaryScreen.Bounds.Height)
\ = [System.Drawing.Graphics]::FromImage(\)
\.CopyFromScreen(0, 0, 0, 0, \.Size)
\.Save('D:\wjq-obsidian\personal-site\screen_fresh.png', [System.Drawing.Imaging.ImageFormat]::Png)
Write-Output done
