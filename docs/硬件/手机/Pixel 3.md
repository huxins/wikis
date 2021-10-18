# Pixel 3

- [Factory Images](https://developers.google.com/android/images#blueline)
- [Android 12 Factory Images](https://developer.android.com/about/versions/12/download#factory-images)
- [Google USB 驱动程序](https://developer.android.com/studio/run/win-usb)
- [Android update Support](https://support.google.com/pixelphone/answer/4457705)

## Bootloader 解锁

```sh
$ adb devices
$ adb reboot bootloader
$ fastboot devices
$ fastboot flashing unlock
$ fastboot flashing lock
$ fastboot reboot
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

##  A/B 系统更新

```sh
$ fastboot --set-active=a
$ fastboot flash boot boot.img
```

