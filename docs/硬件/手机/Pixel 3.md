# Pixel 3

- [Factory Images](https://developers.google.com/android/images#blueline)
- [Android 12 Factory Images](https://developer.android.com/about/versions/12/download#factory-images)
- [Google USB](https://developer.android.com/studio/run/win-usb)
- [Android update Support](https://support.google.com/pixelphone/answer/4457705)
- [TWRP for Google Pixel 3](https://twrp.me/google/googlepixel3.html)

## Relock Bootloader

```sh
$ adb devices
$ adb reboot bootloader
$ fastboot devices
$ fastboot flashing unlock
$ fastboot flashing lock
$ fastboot reboot
```

## Recovery mode

```sh
$ adb reboot bootloader
$ fastboot boot twrp.img
$ adb shell mkdir /sdcard/tmp/
$ adb push twrp.zip /sdcard/tmp/
```

## Magisk

```sh
$ adb install Magisk.apk
$ adb push boot.img /sdcard
```

使用 Magisk 修复 boot.img，将其导出

```sh
$ adb pull /sdcard/Download/Magisk-xxx.img
```

使用此 boot 以获取临时 root，永久 root 可进一步在 Magisk 中直接安装

```sh
$ fastboot boot Magisk-xxx.img
```

##  A/B System Updates

```sh
$ fastboot --set-active=a
$ fastboot flash boot boot.img
```

