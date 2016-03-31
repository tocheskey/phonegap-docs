---
title: Configuring your Application
url: references/phonegap-build/configuring
layout: subpage
expand: build-configuring
---

Apps built using PhoneGap Build can be set up either through our web interface, or by using a `config.xml`.

The `config.xml` file, as specified in the [W3C widget specification](http://www.w3.org/TR/widgets/) , allows developers to easily specify metadata about their applications. You can see a sample `config.xml` with our [PhoneGap Start](https://github.com/phonegap/phonegap-start/blob/master/www/config.xml) application.

<i class="glyphicon glyphicon-check"></i> Please ensure that your `config.xml` file is at the top level of your application (the same level as your `index.html` file). Otherwise it will not be loaded correctly.

We're continually adding features to our `config.xml` support to give PhoneGap Build developers more power to customize their apps. If there are any specific features you'd like to see support for, [please let us know](http://getsatisfaction.com/nitobi/products/nitobi_phonegap_build).

## Essential Properties

<table class="table">
  <tr>
    <td>
      <code>&lt;widget&gt;</code>
    </td>
    <td>
      <p>
        The widget element must be the root of your XML document - it lets us
        know that you are following the W3C specification. When using PhoneGap
        Build, ensure you have the following attributes set on your widget
        element
      </p>
      <p>
        <code>id</code>: the unique identifier for your application. To support all
        supported platforms, this *must* be reverse-domain name style
        (e.g. `com.yourcompany.yourapp`)
      </p>
      <p>
        <code>version</code>: for best results, use a major/minor/patch style version,
        with three numbers, such as `0.0.1`
      </p>
      <p>
        <code>versionCode</code>: (optional) when building for Android, you can set the
        versionCode by specifying it in your *config.xml*. For more information
        on Android's versionCode attribute, see
        [the Android documentation](http://developer.android.com/guide/publishing/versioning.html). 
      </p>
    </td>
  </tr>
  <tr>
    <td><code>&lt;name&gt;</td>
    <td>
      <p>The name of the application.</p>
    </td>
  </tr>
  <tr>
    <td><code>&lt;description&gt;</code></td>
    <td>
      <p>A description for your application.</p>
    </td>
  </tr>
</table>

### Example Config.xml

    <?xml version="1.0" encoding="UTF-8" ?>
        <widget xmlns   = "http://www.w3.org/ns/widgets"
            xmlns:gap   = "http://phonegap.com/ns/1.0"
            id          = "com.phonegap.example"
            versionCode = "10" 
            version     = "1.0.0" >
        
        <!-- versionCode is optional and Android only -->

        <name>PhoneGap Example</name>

        <description>
            An example for phonegap build docs. 
        </description>

        <author href="https://build.phonegap.com" email="support@phonegap.com">
            Hardeep Shoker 
        </author>

    </widget>

<a name="platform"></a>
## Platform Build Selection

By default PhoneGap Build builds your application for every platform. If you only want to build for certain platforms you can specify these platforms with the `platform` tag. You can also use `gap:platform` instead of `platform`.

<table class="table">
  <tr>
    <td><code>&lt;platform&gt;</code></td>
    <td>
      <p>
      You can have zero or more of these elements present in your
      <code>config.xml</code>. If you specify none, all platforms will be built.
      </p>
      <p>
      <code>name</code>: platform to build - one of <code>android, ios, winphone</code>
      </p>
    </td>
  </tr>
</table>

### Example Usage
    
    <platform name="ios" />
    <platform name="android" />
    <platform name="winphone" />

