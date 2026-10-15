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
