---
layout: post
title: "The Day the Lab Became Real: Investigating My First Real Threat"
date: 2025-07-12 18:00:00 -0400
author: J.P.
---

About three weeks ago, I discovered something that made my stomach drop.

Buried deep in my pfSense ruleset, a leftover from early troubleshooting, was a rule that said: 

`Allow All Traffic (LAN -> Any)`. 

I had left the digital front door wide open while I was setting things up.

I fixed it immediately, of course. But the rule had been active for weeks, and I had no idea what, if anything, might have slipped through. The fear of the unknown is a powerful thing in cybersecurity.

On July 12, 2025, that fear became real. I got a Telegram ping from my Suricata alert pipeline:

```
SURICATA STREAM SHUTDOWN RST invalid ack

{TCP} 24.210.78.186:80 -> 202.112.237.233:12338
```

It was an outbound connection to an IP address in China, exhibiting behavior that matched patterns I'd seen for Command and Control (C2) channels.

That was the moment everything changed. I wasn’t just monitoring traffic in a lab anymore. I was investigating a potential breach on my own network. This is no longer just an experiment; it's a real-world defense scenario, and I'm documenting every step of the investigation. More to follow.
