---
title: Signing your iOS Application
url: references/phonegap-build/signing/ios
layout: subpage
expand: build-signing
---

[Mac Users](#_mac_users)
[Windows Users](#_windows_users)

**Note: it is Phonegap Build's policy not to retrieve signing keys for users, for legal reasons. Hold on to them.**

***

## Mac Users

### Convert the iPhone developer certificate to a P12 file on Mac OS

Once you have downloaded the Apple iPhone certificate from Apple, export it to the P12 keystore format. To do this on Mac® OS:

1. Open the Keychain Access application (in the Applications/Utilities folder).
2. If you have not already added the certificate to Keychain, select File > Import. Then navigate to the certificate file (the .cer file) you obtained from Apple.
3. Select the Keys category in Keychain Access.
4. Select the private key associated with your iPhone Development Certificate. The private key is identified by the iPhone Developer: <First Name> <Last Name> public certificate that is paired with it.
5. Command-click the iPhone Developer certificate and select, Export "iPhone Developer: Name...".
![Keychain export](https://build.phonegap.com/images/_docs/ios-builds/keychain-export.png)
6. Save your keystore in the Personal Information Exchange (.p12) file format.
7. You will be prompted to create a password that is used when you use the keystore to sign applications or transfer the key and certificate in this keystore to another keystore.
![keychain password](https://build.phonegap.com/images/_docs/ios-builds/keychain-password.png)

***

## Windows Users

### Convert an Apple developer certificate to a P12 file on Windows

To develop apps via Build, you must use a P12 certificate file. You generate this certificate based on the Apple iPhone developer certificate file you receive from Apple.

1. Download and install [OpenSSL](http://slproweb.com/products/Win32OpenSSL.html)

2. Convert the developer certificate file you receive from Apple into a PEM certificate file. To do this, run the following command-line statement from the [OpenSSL](http://slproweb.com/products/Win32OpenSSL.html) bin directory: 

`openssl x509 -in developer_identity.cer -inform DER -out developer_identity.pem -outform PEM`

3. If you are using the private key from the keychain on a Mac computer, convert it into a PEM key: 

`openssl pkcs12 -nocerts -in mykey.p12 -out mykey.pem`

4. You can now generate a valid P12 file, based on the key and the PEM version of the iPhone developer certificate: 

`openssl pkcs12 -export -inkey mykey.key -in developer_identity.pem -out iphone_dev.p12`

## Register devices
1. Visit [Apple Developer Portal](https://developer.apple.com/ios/manage/provisioningprofiles/index.action).
2. Go to Device section. Under Manage tab, provide Device Name and [Device ID](https://developer.apple.com/ios/manage/devices/howto.action) (40 hex characters)

## Create Provisioning Profile
1. Visit [Apple Developer Portal](https://developer.apple.com/ios/manage/provisioningprofiles/index.action).
2. Go to Provisioning section. Create new profile under Development tab.
3. Fill the form with Profile Name, Certificates (as per .cer above), App ID and your development device. 

## Submit to Build

Go to your Account > Edit Setting > Signing Keys' tab:

![Edit Account](https://lh4.googleusercontent.com/-8yYhqgfxFd8/UQogUPNxBaI/AAAAAAAAADc/kS6zVSBT30U/s800/edit_account_settings.png)

Click 'add a key...' and supply your previously generated p12:

![Add Key](https://lh3.googleusercontent.com/-0Va4o9-6Bvs/UaS4oBZyrcI/AAAAAAAAAIU/9D3jQxFUYfw/s800/iOS%2520add%2520key.png)
    
## <a id="unlock"> </a>Unlocking the key.

Go to your Account > Edit Setting > Signing Keys' tab: 

![Edit Account](https://lh4.googleusercontent.com/-8yYhqgfxFd8/UQogUPNxBaI/AAAAAAAAADc/kS6zVSBT30U/s800/edit_account_settings.png)

Click 'lock' button and supply the certificate password you used to export your cert.

![Unlock key](https://lh4.googleusercontent.com/-webq3UkyIQI/UbXzhTNFb_I/AAAAAAAAAIw/rQR_7mi-F7s/s800/iOS%2520unlock.png)