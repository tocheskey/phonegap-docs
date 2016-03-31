---
title: Custom URL Schemes
url: references/phonegap-build/configuring/custom-urls
layout: subpage
expand: build-configuring
---

iOS allows registration of
  <a href="https://developer.apple.com/library/ios/documentation/iPhone/Conceptual/iPhoneOSProgrammingGuide/AdvancedAppTricks/AdvancedAppTricks.html#//apple_ref/doc/uid/TP40007072-CH7-SW50" target="_blank">custom URL Schemes</a>.

<table class="table">
  <tr>
    <td><code>&lt;url-scheme&gt;</code></td>
    <td>
      <p>
        Your app can have many <code>url-scheme</code> elements present.
      </p>
      <p>
        <code>name</code> (optional): defaults to the application bundle id. This has to be unique. If a duplicate is found the build will fail.
      </p>
      <p>
        <code>role</code>: must be <code>Editor</code>, <code>Viewer</code>, <code>Shell</code> or <code>None</code>, optional, defaults to <code>None</code>.
      </p>
      <p>
        <i class="glyphicon glyphicon-check"></i> At least one <code>scheme</code> must be present.
      </p>
    </td>
  </tr>
</table>


## Example Usage

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

        <url-scheme name="com.acme.myscheme" role="None">
          <scheme>pgbr</scheme>
          <scheme>pgbw</scheme>
        </url-scheme>
    </widget>
