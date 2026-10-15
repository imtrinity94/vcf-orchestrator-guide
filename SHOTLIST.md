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
