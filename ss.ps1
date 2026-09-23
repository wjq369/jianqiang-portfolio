Add-Type -AssemblyName System.Windows.Forms
Add-Type -AssemblyName System.Drawing
 = New-Object System.Drawing.Bitmap([System.Windows.Forms.Screen]::PrimaryScreen.Bounds.Width, [System.Windows.Forms.Screen]::PrimaryScreen.Bounds.Height)
 = [System.Drawing.Graphics]::FromImage()
.CopyFromScreen(0, 0, 0, 0, .Size)
.Save('D:\wjq-obsidian\personal-site\screen.png', [System.Drawing.Imaging.ImageFormat]::Png)
Write-Output done