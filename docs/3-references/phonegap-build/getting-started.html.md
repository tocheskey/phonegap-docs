---
title: Getting Started
url: references/phonegap-build/getting-started
layout: subpage
expand: build
---

PhoneGap Build requires an application to be packaged in a specific manner that may not be intuitive at first.

We use an open packaging model that follows the [W3C Widget Packaging specification](http://www.w3.org/TR/widgets/).

The following is a guide to help package your application for PhoneGap Build.

## Sections

1. [What Do I Upload?](#what_do_i_upload)
2. [How Do I Configure My Application?](#configure_application)
3. [What's Next?](#whats_next)
3. [Where can I Get Help?](#help)


<a id="what_do_i_upload"></a>
### What Do I Upload?

#### Preparing the Assets

PhoneGap Build only requires the assets of your application. This is essentially your www directory which contains your html, css, images, js files, etc.

PhoneGap Build will most likely fail to compile your application if native files are uploaded (.h, .m, .java, etc).

#### Removing Unnecessary Files

Once you've included the necessary assets, remove the `phonegap.js` (cordova.js) as Build will automatically inject it during compile time.

#### Why must you delete the `phonegap.js`?

PhoneGap requires a different JavaScript file for each platform and using an incompatible `phonegap.js` will result in errors when running your application.

#### Making Sure You can Still Access the PhoneGap API

Once you've deleted the `phonegap.js` you'll need to make sure that your application can still access the PhoneGap API.

To do so, simply ensure that the following reference is made in your `index.html`

    <script src="phonegap.js"></script>

Note that this is interchangeable with

    <script src="cordova.js"></script>

For maximum sizes of zip uploads, see the <a href="https://build.phonegap.com/plans">plans page</a>.

<a id="configure_application"></a>
### How Do I Configure My Application?

PhoneGap Build supports a configuration XML file, `config.xml`.

This configuration file allows you to modify things like the application's title, icons, splash screens, and other properties.

[More information on our config.xml can be found here.](configuring_basics.md.html)

<a id="structure_application"></a>
### How Do I Structure My Application?

PhoneGap Build's only requirement for your application structure is that the `config.xml` and `index.html` is in the top level of your application.  Other than that
you can structure your application as dictated by your workflows.

As your application may contain files or directories not required in your application (unused splash screens, bower packages, grunt artifacts, un-compiled less files etc.) we support a
special file called `.pgbomit`.

`.pgbomit` is a file that you can create and add to a directory that signifies to PhoneGap Build that it SHOULD NOT
include the contents of that directory as source for the native applciation. This folder, however, can be
used to store any files needed during the PhoneGap Build process **up to the compile step**.

A typical use case is for a directory containing the icons and splashcreens for an app. Place `.pgbomit` in that directory and none of those files/directories will be included in the binary app package, **except** those copied and used for icons and splashscreens for a specific platform.

Please note that the `.pgbomit` file is a placeholder file only, it is not read and its only function is to highlight a directory.  It is *not* like .gitignore or other file types that can contain patterns.

<a id="help"></a>
### Where can I get help?

If you have any questions or you would like to provide some feedback to our team, don't hesitate to drop us a line on our [community support channel](http://community.phonegap.com).