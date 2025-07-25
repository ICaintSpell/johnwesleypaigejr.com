---
layout: post
title: "I Remember Way Back When...."
date: 2025-07-19 22:00:00 -0400
author: J.P.
---

Sitting here finishing up the last little bit of my Discrete Mathematics homework and I got to thinking about where I’ve come from. I went thru struggles and many-a-night up until 0200 trying to fix what I have broken. And so it reminded me of a write-up I made back in April on the 9th. 
This one here:

PFSense version 2.7.0. on bare metal Jetway Mini PC HBFBZ10-6412-B

Attempted install of OpenVPN onto PFSense. For whatever reason while configuring OpenVPN all went well until it came time to import packages. DNS servers were assigned properly, CA certificates were created successfully but when it came time to import packages and configure OpenVPN I discovered package files were missing. Only solution was to update PFSense to version 2.7.2. I then exported my current configuration to import once I updated PFSense. I attempted the update and update failed repeatedly. Decided to reimage my Jetway using a 32GB USB stick. Attempted to reimage PC with USB boot loaded with PFSense 2.7.2.. Install was successful. Web interface functioned properly from start. (I mention this because upon first install I had issues with PFSense communicating with Netgate servers and then after that with an offline Web GUI) Only after importing configuration, renaming port identities and “improving” the firewall rules did I lost internet connection and connection to the web GUI. At that point I SSH’d in using Putty and restarted the web interface, to no avail. 192.168.2.1 was still no longer assessable. At that point I began my diagnostics.

I then….
1. Checked the assigned IP on the LAN (Server) interface, assigned IP was correct.
2. Ensured I was connected to the right network, I was.
3. Checked firewall settings, everything appeared fine.
4. Confirmed Web GUI was listening, it was not.
I then attempted to reconnect to 192.168.2.1 in Google Chrome and after failing to connect again, I ran Windows troubleshooter and found that “resource 192.168.2.1 is online but it is not responding to connection attempts.”

I then…..

Tried using HTTP versus HTTPS, still the problem persisted.
Attempted a restart of the web GUI from the shell (/etc/rc.restart_webgui), received no response.
Checked what port Lighttpd (sockstat -l | grep lighttpd) was listening on, lighttpd file was missing.
Tested if web GUI was accessible from inside PFSense itself with curl (curl -vk https://127.0.0.1/), It was not.
From there I proceeded to…

Check for web GUI errors (clog /var/log/system.log | grep lighttpd, cat /var/log/system.log | grep lighttpd, cat /var/log/messages | grep lighttpd), Command was not found.

Tried assessing the GUI from other devices in hope it was a cache issue on my Server machine, no avail.
This is when I found that lighttpd was not even installed in PFSense, then what I did next was….

Using ipconfig verified again what the current LAN IP was, and it was still 192.168.2.1.

Restarted the GUI again, nothing.

Ran restart webConfiguerator (option 11) in the console, still nothing.

Checked to see if GUI was listening on port 443 (sockstat -4 | grep :443, root lighttpd ... 192.168.2.1:443, /usr/local/sbin/lighttpd -f /var/etc/lighty-webConfigurator.conf), at that point was given command not found on command /usr/local/sbin/lighttpd -f /var/etc/lighty-webConfigurator.conf.

From here I decided to

Verify I had installed the correct version, version was found to be correct (2.7.2)
Restart all services (/etc/rc.restart_all)
After reboot I then attempted to….

Reinstalling the GUI package (pkg install -f PFSense-pkg-webgui)
And ping 192.168.2.1, all packets were dropped
Reassign WAN and LAN interfaces and recheck the LAN IP address, was still found to be 192.168.2.1.
Retried from another device, still nothing.
After this I still had no web GUI or internet connection.
So I….

Checked if the GUI was running (pfctl -sr), it was not.
Then restarting the webConfigurator (/etc/rc.restart_webgui), no avail yet again.
Then ran /etc/rc.reload_all.
Set static IP on LAN again.
At this point I have decided to reset to factory settings. After returning PFSense to factory default I then checked the default IP address of 192.168.1.1 and found I STILL could not get into the GUI. I then…

Verified the LAN interface was connected by reactivating and reassigning ports, still could not access the GUI nor ping the PFSense.
I found that this was the end of my diagnostics, and my only other recourse I had was to reimage the Jetway. After loading the install manger from the USB I reassigned ports and brought the Jetway online. On my server machine I proceeded to go to 192.168.1.1 and was successfully able to access the GUI login page. I had solved my issue!