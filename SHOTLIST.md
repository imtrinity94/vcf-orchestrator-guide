# Screenshot shot list

Lab: VCF 9.1, Orchestrator 9.1.1. Save PNGs at roughly 1400 px wide, crop to the relevant area, and blur passwords and secrets.

## Chapter 1

| Figure | File | What to capture | Replaces (old cookbook) |
|---|---|---|---|
| 1.1 | `ch01/fig-1-1.png` | Diagram (to be drawn): embedded and standalone Orchestrator, auth providers, plug-in targets | Orchestrator architecture figure |
| 1.2 | `ch01/fig-1-2.png` | Provider Consumption org portal, **Orchestrate** tab showing the client dashboard | vCenter Orchestrator Client login |
| 1.3 | `ch01/fig-1-3.png` | VM Apps org, Integrations > Add Integration > Orchestration, **Embedded** selected | — |
| 1.4 | `ch01/fig-1-4.png` | vSphere Client, Deploy OVF Template, **Customize template** for the 9.1 appliance | OVF Customize template (vCO 5.5) |
| 1.5 | `ch01/fig-1-5.png` | Appliance VM console after first boot, showing the FQDN | Appliance blue console screen |
| 1.6 | `ch01/fig-1-6.png` | vSphere SSO, Users and Groups > Groups > Add, group `OrchestratorAdmins` | LDAP/SSO configuration pages |
| 1.7 | `ch01/fig-1-7.png` | All Apps org, Administer > Connections > Integrations > Orchestrator form after Validate | vRA endpoint configuration |
| 1.8 | `ch01/fig-1-8.png` | VCF Operations, Fleet Management > Identity & Access > VCF Other Components, new OIDC client | — |
| 1.9 | `ch01/fig-1-9.png` | Orchestrator Client dashboard with the navigation fully expanded | Orchestrator home page |
| 1.10 | `ch01/fig-1-10.png` | Run dialog of **Add a vCenter Server instance**, connection properties page | — |
| 1.11 | `ch01/fig-1-11.png` | Administration > Inventory > vSphere vCenter Server, `vc01.vmw.lab` expanded | — |

## Chapter 2

| Figure | File | What to capture | Replaces (old cookbook) |
|---|---|---|---|
| 2.1 | `ch02/fig-2-1.png` | vSphere web console of `vco01`, logged in as `root`, after `/usr/bin/toggle-ssh enable`, showing its output | VAMI Admin tab, SSH service enabled |
| 2.2 | `ch02/fig-2-2.png` | SSH session on `vco01`: `vracli certificate ingress --list \| openssl x509 -noout -subject -issuer -dates`, lab CA as issuer | Control Center SSL certificate page |
| 2.3 | `ch02/fig-2-3.png` | Browser certificate viewer for `https://vco01.vmw.lab`: chain up to the lab root CA and the **Subject Alternative Name** field | — |
| 2.4 | `ch02/fig-2-4.png` | **Administration > Inventory > Configuration > Keystores > Dunes**, signing certificate selected, subject and validity dates visible | Control Center Package Signing Certificate page |
| 2.5 | `ch02/fig-2-5.png` | Run dialog of **Generate Package Signing Certificate**, **Common name** `VMW Lab Orchestrator`, signature algorithm drop-down open | — |
| 2.6 | `ch02/fig-2-6.png` | Diagram (to be drawn): clients → `vco.vmw.lab` load balancer → TCP 443 to `vco01`/`vco02`/`vco03`; one Kubernetes cluster across the nodes, a PostgreSQL replica on each, one primary | Orchestrator cluster figure |
| 2.7 | `ch02/fig-2-7.png` | SSH session on `vco01`: `kubectl -n prelude get nodes` with all three nodes `Ready` | Control Center cluster status |
| 2.8 | `ch02/fig-2-8.png` | Load balancer pool status (NSX in the lab) for `vco.vmw.lab`, all three members up | — |
| 2.9 | `ch02/fig-2-9.png` | SSH session on `vco01`: output of `vracli remote-syslog` with the `labsyslog` integration to `syslog01.vmw.lab`, TCP 6514 | Control Center Logging Integration page |
| 2.10 | `ch02/fig-2-10.png` | Lab syslog server search or tail view filtered on `vcfguide-syslog-test`, two lines from `vco01.vmw.lab` | — |
| 2.11 | `ch02/fig-2-11.png` | vSphere Client **Take Snapshot** dialog for `vco01`, name `before-2.7-heap-change`, **Include virtual machine's memory** cleared | Control Center Export Configuration page |
| 2.12 | `ch02/fig-2-12.png` | SSH session on `vco01`: `repmgr cluster show --terse --compact` (one primary, two standbys) and `kubectl -n prelude get pods -o wide \| grep postgres` | — |
| 2.13 | `ch02/fig-2-13.png` | SSH session on `vco01` after `deploy.sh`: `vco-app` pod **Limits** with `memory: 8G`, and `-XX:MaxRAMPercentage=50` | setenv.sh heap settings |
| 2.14 | `ch02/fig-2-14.png` | SSH session on `vco01`: part of `vracli vro properties advanced`, `com.vmware.js.allow-local-process` visible | Control Center System Properties page |
| 2.15 | `ch02/fig-2-15.png` | Orchestrator Client, run of action `com.vcfguide.chapter2/resolveHost` with `vc01.vmw.lab`, **Logs** tab showing the IP address | — |

## Chapter 3

| Figure | File | What to capture | Replaces (old cookbook) |
|---|---|---|---|
| 3.1 | `ch03/fig-3-1.png` | Workflow editor for **Describe a VM**, **Inputs/Outputs** tab: input `vm` (`VC:VirtualMachine`), output `summary` (`string`) | Java client IN and OUT tabs |
| 3.2 | `ch03/fig-3-2.png` | **Schema** tab of **Describe a VM**: Start, **Read power state**, **Build summary**, End; **Build summary** selected, **Inputs/Outputs** tab with `vm` and `powerState` in, `summary` out | Java client Visual Binding tab |
| 3.3 | `ch03/fig-3-3.png` | Run of **Describe a VM**, **Variables** tab with `vm`, `powerState` = `poweredOn`, and `summary` filled in | Java client workflow token variables |
| 3.4 | `ch03/fig-3-4.png` | **Schema** tab of **List VMs by name**, **Promote** dialog for **findVmsByName**: `namePattern` → **Input**, `actionResult` → **Variable** | Java client "promote" pop-up |
| 3.5 | `ch03/fig-3-5.png` | **Schema** tab of **List VMs by name**: Start, **findVmsByName** action element, **Describe each VM**, End, inside a workflow note | Schema with action element |
| 3.6 | `ch03/fig-3-6.png` | Run of **List VMs by name** with `namePattern` = `^vc`, **Logs** tab: the match count, then one line per VM | Java client Logs tab |
| 3.7 | `ch03/fig-3-7.png` | **Schema** tab of **Wait for VMware Tools**, switch selected, **Cases** tab: `powerState` equals `poweredOn` → **Check VMware Tools**, default → **Not powered on** | Switch element dialog |
| 3.8 | `ch03/fig-3-8.png` | Full schema of **Wait for VMware Tools**: switch, **Tools running?** decision, **Try again?** custom decision with its true arrow looping back to **Check VMware Tools** | Loop schema |
| 3.9 | `ch03/fig-3-9.png` | Run of **Describe several VMs** with three VMs, **Variables** tab: input array of three VMs, output `summary` array of three lines | Foreach element dialog |
| 3.10 | `ch03/fig-3-10.png` | **Schema** tab of **Find a VM by name**: red dashed exception arrow from **Find the VM** to **Explain the failure** → **Thrown exception**; **Find the VM** selected, **General** tab, **Exception handling** = `errorMessage` | Java client Exceptions tab |
| 3.11 | `ch03/fig-3-11.png` | Failed run of **Find a VM by name** with a missing name: run header in **Failed** state with the custom error, **Logs** tab with the error line | Failed workflow token |
| 3.12 | `ch03/fig-3-12.png` | **Schema** tab of **Find a VM by name** with a **Default error handler** → **Log unexpected error** → **Thrown exception**, beside the main path | — |
| 3.13 | `ch03/fig-3-13.png` | **Summary** tab of **List VMs by name**, **Resume workflow from failed behavior** = **Enabled**, drop-down open with **System default**, **Enabled**, **Disabled** | — |
| 3.14 | `ch03/fig-3-14.png` | Run of **List VMs by name** in **Waiting** after a failure, **Answer** dialog with **Resume** selected, **Parameters** tab: `namePattern` changed from `[vc` to `^vc` | — |
| 3.15 | `ch03/fig-3-15.png` | Debug run of **List VMs by name** paused at **Describe each VM** (breakpoint marker, element highlighted), **Variables** tab with `namePattern` and the `vms` array expanded | Java client debugger |
| 3.16 | `ch03/fig-3-16.png` | Debug run, **Describe each VM** **Scripting** tab with a red breakpoint on `vmNames.push(line);`; **Debugger** tab with watch expressions `i` and `line` | — |
| 3.17 | `ch03/fig-3-17.png` | **Activity > Workflow Runs**, replayed run of **List VMs by name** (run replay on): left list of elements, **findVmsByName** selected, **Variables** tab with `vms` | Java client workflow token tree |
| 3.18 | `ch03/fig-3-18.png` | **Input Form** tab of **Report VMs**: palette, form canvas with tabs **What to find** and **Options**, properties pane (**Appearance**, **Values**, **Constraints**) for `vcenterName` | Java client Presentation tab |
| 3.19 | `ch03/fig-3-19.png` | Properties of `vcenterName`, **Values** tab: **Value options** = **External source**, action `com.vcfguide.chapter3/listVcenterNames` | Presentation property "Predefined list of elements" |
| 3.20 | `ch03/fig-3-20.png` | Properties of `maxResults`, **Appearance** tab: **Visibility** = **Conditional value**, `limitResults` equals `true`; **Options** tab of the canvas visible | Presentation property "Show parameter input" |
| 3.21 | `ch03/fig-3-21.png` | **Input Form** of **Report VMs**, **Validations** tab: **Orchestrator validation** *Name pattern is a valid regular expression* with action `validateNamePattern` | — |
| 3.22 | `ch03/fig-3-22.png` | Run form of **Report VMs**, **What to find** tab: **vCenter** = `vc01.vmw.lab`, **VM name pattern** = `[vc`, **Power state** = `any`, validation message shown | Java client run dialog |
| 3.23 | `ch03/fig-3-23.png` | **Schema** tab of **Pause until an hour**: Start, **Work out the wake-up time**, **Waiting timer**, **Carry on**, End; timer selected, **Inputs** tab `timer.date` → `wakeDate` | Waiting Timer element |
| 3.24 | `ch03/fig-3-24.png` | **Activity > Workflow Runs** filtered on **Pause until an hour**: one run **Waiting**, **Logs** tab with *Waiting until …* | — |
| 3.25 | `ch03/fig-3-25.png` | **Schema** tab of **Wait for a signal**: **Set the deadline**, **Wait for custom event** selected, inputs `eventName`, `endDate`, `isExternalEvent`, output `success` → `signalled` | — |
| 3.26 | `ch03/fig-3-26.png` | **Activity > Workflow Runs**: completed **Send a signal** run and the **Wait for a signal** run it released; **Variables** tab with `eventName` = `vcfguide-signal-test`, `signalled` = `true` | — |
| 3.27 | `ch03/fig-3-27.png` | **Schema** tab of **Start a VM description**: **Asynchronous workflow** element calling **Describe a VM** selected, `vm` under **Inputs**, `describeToken` under **Output Options**; **Report the token** | Asynchronous workflow element |
| 3.28 | `ch03/fig-3-28.png` | **Variables** tab of **Describe VMs in parallel**: `describeWorkflow` = **Describe a VM**, `timeoutSeconds` = `300`, `tokens` (`Array/WorkflowToken`) | — |
| 3.29 | `ch03/fig-3-29.png` | **Activity > Workflow Runs**: one **Describe VMs in parallel** run and three **Describe a VM** runs started within a second of each other | Nested workflows figure |
| 3.30 | `ch03/fig-3-30.png` | **Schema** tab of **Approve a VM description**, **Ask for approval** selected: `timeout.date` bound to `approvalDeadline`, `security.*` inputs unbound, `approved` and `approverComment` as form inputs | Java client User Interaction External inputs tab |
| 3.31 | `ch03/fig-3-31.png` | Full schema of **Approve a VM description**: **Set the deadline**, **Ask for approval**, **Approved?** with **Describe a VM** (true) and **Log the rejection** (false), red dashed exception arrow to **Log the timeout** | User interaction schema |
| 3.32 | `ch03/fig-3-32.png` | **Activity > Waiting for Input** with one **Approve a VM description** entry, answer form open: **Approve this request** selected, **Reason** = `Lab test`, **Answer** button | Java client answer dialog |

## Chapter 4

| Figure | File | What to capture | Replaces (old cookbook) |
|---|---|---|---|
| 4.1 | `ch04/fig-4-1.png` | Run of action `com.vcfguide.chapter4/probeLanguage`, **Logs** tab: *yes* info lines and *no* warning lines, one per feature | — |
| 4.2 | `ch04/fig-4-2.png` | **API Explorer**, search `System`, **System** object expanded, `getModule` selected with its parameter and return type | Java client API Explorer |
| 4.3 | `ch04/fig-4-3.png` | Run dialog of action `getVmFacts` after a run: `vm` = a lab VM, result with `name`, `powerState`, `cpus`, `memoryMb`, `guestOs` | — |
| 4.4 | `ch04/fig-4-4.png` | **Version History** tab of `getVmFacts`: versions `1.0.0` and `1.1.0`, compare view with the added `facts.put("host", …)` line highlighted | Java client action version dialog |
| 4.5 | `ch04/fig-4-5.png` | References or dependencies view of `com.vcfguide.chapter3/findVmsByName`, listing **List VMs by name** and **Report VMs** | Java client "Find elements that use this element" |
| 4.6 | `ch04/fig-4-6.png` | **Script** tab of action `splitHostName`: **Runtime** = **Python 3.10**, input `fqdn`, return type `Properties`, default **Memory limit** and **Timeout**, `handler` function | — |
| 4.7 | `ch04/fig-4-7.png` | **System Settings > Performance and Features > Environment Repositories**, **Default Public Repositories** on, **Manage Repositories** visible | — |
| 4.8 | `ch04/fig-4-8.png` | Environment `vcfguide-python-crypto`, **Download Logs** tab: pip installing `cryptography-43.0.3` and `cffi`, no errors | — |
| 4.9 | `ch04/fig-4-9.png` | Run of action `getCertificateExpiry` with `vc01.vmw.lab`, `443`: result `host`, `subject`, `notAfter`, `daysLeft`, and the printed log line | — |
| 4.10 | `ch04/fig-4-10.png` | Run of action `resolveHostNames` (**Runtime** = **Node.js 22**) with `vc01.vmw.lab`, `vco01.vmw.lab`, `nothing.vmw.lab`: result with two addresses and one `not found`, three `console.log` lines | — |
| 4.11 | `ch04/fig-4-11.png` | Environment `vcfguide-node-semver`, **Download Logs** tab: npm adding `semver@7.6.3`, no errors | — |
| 4.12 | `ch04/fig-4-12.png` | Run of action `checkMinimumVersion` (runtime `vcfguide-node-semver`) with `9.0.1.0` and `9.0.0`: result `version`, `minimum`, `ok` = `true`, and the log line | — |
| 4.13 | `ch04/fig-4-13.png` | **Script** tab of action `formatUptime`: **Runtime** = **PowerShell 7.4**, input `seconds` (`number`), return type `string`, `Handler` function | — |
| 4.14 | `ch04/fig-4-14.png` | **Script** tab of action `getSnapshotReport`: **Runtime** = **PowerCLI 13 (PowerShell 7.4)**, inputs `vcenter`, `user`, `password` (`SecureString`), `maxAgeDays`, return type `Properties`, **Memory limit** `512`, **Timeout** `300` | — |
| 4.15 | `ch04/fig-4-15.png` | Run of `getSnapshotReport` against `vc01.vmw.lab`, `maxAgeDays` = `7`: result `vcenter`, `maxAgeDays`, `count`, multi-line `report`, `Write-Host` log line; password blurred | PowerShell plug-in host configuration |
| 4.16 | `ch04/fig-4-16.png` | Run of **Log at every level**, **Logs** tab: info, warning, and error lines with the `[Log at every level <run ID>]` prefix, level filter open | Java client Logs tab |
| 4.17 | `ch04/fig-4-17.png` | The 9.1.1 view that lists `Server.*` entries for a run of **Log at every level** (run **Events** tab or audit view): the warning and the error with short and long text | Java client Events tab |
| 4.18 | `ch04/fig-4-18.png` | **System Settings > Log Configuration**: server and scripting log levels at `INFO`, and any rotation settings | Control Center Logs page |
| 4.19 | `ch04/fig-4-19.png` | **Assets > Configurations**, folders **VCF Orchestrator Guide > Chapter 4 > vCenters**, element `vc01.vmw.lab`, **Variables** tab: `user` (`string`), `password` (`SecureString`, hidden) | Java client Configurations view, Attributes tab |
| 4.20 | `ch04/fig-4-20.png` | **Variables** tab of **Report old snapshots**, `maxAgeDays` (`number`) being edited: **Bind to configuration**, `vcfguide-settings`, `snapshotMaxAgeDays` | Java client "Link to configuration attribute" |
| 4.21 | `ch04/fig-4-21.png` | Run of **Report old snapshots**, **Variables** tab (`vcenterName`, `maxAgeDays` = `7`, `report`), beside `vcfguide-settings` **Variables** tab with `lastSnapshotReport` set to the run's time | — |

## Chapter 5

| Figure | File | What to capture | Replaces (old cookbook) |
|---|---|---|---|
| 5.1 | `ch05/fig-5-1.png` | **System Settings > Plug-ins** on `vco01`: full list with name, version, state; **vCenter**, **HTTP-REST**, **SSH**, **SQL** visible; **Add Plug-in** button | Control Center Manage Plug-ins page |
| 5.2 | `ch05/fig-5-2.png` | **Administration > Inventory**, **vSphere vCenter Server** > `vc01.vmw.lab` down to a VM, VM selected, details pane with `VC:VirtualMachine` and properties | Java client inventory tab |
| 5.3 | `ch05/fig-5-3.png` | **Add Plug-in** dialog after **Next**: plug-in name, version, vendor, licence agreement check box, **Install** button | Control Center plug-in install page |
| 5.4 | `ch05/fig-5-4.png` | Run dialog of **Add a REST host**, **Host Properties** tab: `vc01-rest`, `https://vc01.vmw.lab`, timeouts `30`/`60`, certificate acceptance yes, **Redirect strategy** `defaultRedirect` | Add a REST host dialog (Java client) |
| 5.5 | `ch05/fig-5-5.png` | Run of **Invoke a REST operation** for `vc01-rest` / `Create session`, **Variables** tab: `statusCode` `201`, `contentAsString` with the token (mostly blurred) | — |
| 5.6 | `ch05/fig-5-6.png` | Run of action `com.vcfguide.chapter5/listVcenterVms` with `vc01-rest`: result array of VM names, power states, IDs; **Logs** tab with the count line | — |
| 5.7 | `ch05/fig-5-7.png` | Run dialog of **Generate key pair**: **RSA**, **4096**, passphrase filled in (hidden) | — |
| 5.8 | `ch05/fig-5-8.png` | Run of **Run SSH command** on `syslog01.vmw.lab` with `uptime`, **Variables** tab with the output line and `exitCode` `0` | Run SSH command dialog (Java client) |
| 5.9 | `ch05/fig-5-9.png` | Failed run of action `com.vcfguide.chapter5/runSshCommand` with `ls /nonexistent`: error with exit code `2` and *No such file or directory*; **Logs** tab with the *Running on* line | — |
| 5.10 | `ch05/fig-5-10.png` | Run dialog of **Add a database**: `db01-vcfguide`, **PostgreSQL**, `jdbc:postgresql://db01.vmw.lab:5432/vcfguide`, **User credentials** tab visible | Add a database dialog (Java client) |
| 5.11 | `ch05/fig-5-11.png` | Run of **Record VM facts** with three VMs: **Logs** tab *3 rows written to db01-vcfguide*, **Variables** tab `rowsWritten` `3` | — |
| 5.12 | `ch05/fig-5-12.png` | Run of action `com.vcfguide.chapter5/latestVmFacts` with `db01-vcfguide`, `5`: three result lines with VM name, power state, vCPUs, memory, time | — |
