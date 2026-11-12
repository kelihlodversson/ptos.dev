// Curated tracker snapshots, not build-time or browser GitHub API calls.
export const issuesReviewedAt = "2026-11-12";
type FeatureIssue = {
  number: number;
  title: string;
  url: string;
  summary: string;
  status: 'Open' | 'In progress';
  implementation?: { label: string; url: string };
};
export const featureIssues: Record<string, FeatureIssue[]> = {
  "portable-architecture": [
    {"number": 898, "title": "Extend external libaes and CUIS to ARM and m68k", "url": "https://github.com/kelihlodversson/pTOS/issues/898", "summary": "Bring external libaes and CUIS to ARM and m68k protected configurations.", "status": "Open"},
    {"number": 644, "title": "Remove support for a single address space on the non-legacy architectures", "url": "https://github.com/kelihlodversson/pTOS/issues/644", "summary": "Track the proposal to retire flat-memory configurations on non-legacy targets.", "status": "Open"},
    {"number": 75, "title": "Make QEMU ARM virt hardware discovery device-tree driven", "url": "https://github.com/kelihlodversson/pTOS/issues/75", "summary": "Replace fixed ARM hardware addresses with shared Device Tree resource discovery.", "status": "Open"},
  ],
  "address-spaces": [
    {"number": 713, "title": "Complete generic native scheduling and MiNT multitasking across architectures", "url": "https://github.com/kelihlodversson/pTOS/issues/713", "summary": "Complete architecture-neutral scheduling and preemption on supported MMU targets.", "status": "In progress", "implementation": {"label": "Implementation: draft PR #903", "url": "https://github.com/kelihlodversson/pTOS/pull/903"}},
    {"number": 889, "title": "Epic: Pclone / xclone / proc_clone, thread-process-address-space model and MiNT/MagiC compatibility", "url": "https://github.com/kelihlodversson/pTOS/issues/889", "summary": "Separate process, thread and address-space lifetimes and define clone/fork behavior.", "status": "In progress", "implementation": {"label": "Implementation: draft PR #903", "url": "https://github.com/kelihlodversson/pTOS/pull/903"}},
    {"number": 76, "title": "Add ARM32 LPAE and high physical-address MMIO support", "url": "https://github.com/kelihlodversson/pTOS/issues/76", "summary": "Extend ARM32 physical addressing and device mappings with LPAE.", "status": "Open"},
  ],
  "userspace-aes": [
    {"number": 898, "title": "Extend external libaes and CUIS to ARM and m68k", "url": "https://github.com/kelihlodversson/pTOS/issues/898", "summary": "Extend the userspace GUI path beyond x32 once its kernel and ABI prerequisites are ready.", "status": "Open"},
    {"number": 915, "title": "Audit and minimize CUIS syscall surface (not a second AES API)", "url": "https://github.com/kelihlodversson/pTOS/issues/915", "summary": "Reduce the privileged CUIS interface while retaining GEM policy in libaes.", "status": "Open"},
    {"number": 884, "title": "libaes: complete extended events, replay and application control", "url": "https://github.com/kelihlodversson/pTOS/issues/884", "summary": "Finish applicable extended events, input replay and application-control behavior.", "status": "Open"},
    {"number": 885, "title": "libaes: add applicable extended menus, objects and windowed forms", "url": "https://github.com/kelihlodversson/pTOS/issues/885", "summary": "Add extended menus, object support and windowed forms.", "status": "Open"},
    {"number": 886, "title": "libaes: finish extended window and clipboard compatibility", "url": "https://github.com/kelihlodversson/pTOS/issues/886", "summary": "Complete applicable extended window and clipboard behavior.", "status": "Open"},
  ],
  "native-applications": [
    {"number": 673, "title": "Complete shared libcmini integration for native applications", "url": "https://github.com/kelihlodversson/pTOS/issues/673", "summary": "Complete a separately linked shared libcmini for native dynamic applications.", "status": "Open"},
    {"number": 323, "title": "FDPIC execution: independently loadable regions and function descriptors", "url": "https://github.com/kelihlodversson/pTOS/issues/323", "summary": "Explore independently placed executable regions and function descriptors, including non-MMU use.", "status": "Open"},
    {"number": 83, "title": "Add ELF64 userspace and a native 64-bit process ABI", "url": "https://github.com/kelihlodversson/pTOS/issues/83", "summary": "Define ELF64 loading and a native 64-bit userspace ABI alongside ELF32 support.", "status": "Open"},
  ],
  "graphics-fonts": [
    {"number": 283, "title": "Unify Falcon 16-bit VDI with packed truecolor backend", "url": "https://github.com/kelihlodversson/pTOS/issues/283", "summary": "Route Falcon 16-bit graphics through the shared packed truecolor renderer.", "status": "Open"},
    {"number": 637, "title": "vdi: skewed text turned by 90° loses its skew on 16-bit (true colour) screens", "url": "https://github.com/kelihlodversson/pTOS/issues/637", "summary": "Fix skewed, rotated text rendering on truecolor screens.", "status": "Open"},
    {"number": 94, "title": "VDI: boot/runtime validation on non-Raspberry Pi targets (Amiga, ColdFire, TT/Falcon)", "url": "https://github.com/kelihlodversson/pTOS/issues/94", "summary": "Extend boot and drawing validation of the shared VDI changes on other targets.", "status": "Open"},
  ],
  "tos-gem": [
    {"number": 674, "title": "m68k: emulate Super() and Supexec() in user mode for classic programs", "url": "https://github.com/kelihlodversson/pTOS/issues/674", "summary": "Explore protected user-mode emulation of classic m68k Super() and Supexec() behavior.", "status": "Open"},
    {"number": 836, "title": "AES: Support version 3 (RSXHDR) resource files with 32-bit offsets", "url": "https://github.com/kelihlodversson/pTOS/issues/836", "summary": "Support version-3 resource headers and 32-bit resource offsets.", "status": "Open"},
    {"number": 198, "title": "Add long filename support and FreeMiNT-compatible Dopendir/Dreaddir", "url": "https://github.com/kelihlodversson/pTOS/issues/198", "summary": "Add long filenames and FreeMiNT-compatible directory enumeration.", "status": "Open"},
  ],
  "hardware-devices": [
    {"number": 75, "title": "Make QEMU ARM virt hardware discovery device-tree driven", "url": "https://github.com/kelihlodversson/pTOS/issues/75", "summary": "Discover ARM platform resources from Device Tree instead of hardcoded addresses.", "status": "Open"},
    {"number": 76, "title": "Add ARM32 LPAE and high physical-address MMIO support", "url": "https://github.com/kelihlodversson/pTOS/issues/76", "summary": "Map and use ARM32 MMIO resources above 4 GiB.", "status": "Open"},
    {"number": 270, "title": "Implement the xHCI controller driver for Raspberry Pi 4/400 USB (usb/ucd_xhci.c is a stub)", "url": "https://github.com/kelihlodversson/pTOS/issues/270", "summary": "Implement the missing Raspberry Pi 4/400 xHCI controller operations.", "status": "Open"},
    {"number": 336, "title": "x86-64: storage driver, bootable media and physical hardware validation", "url": "https://github.com/kelihlodversson/pTOS/issues/336", "summary": "Add x86-64 storage, bootable media and physical-machine validation.", "status": "Open"},
    {"number": 74, "title": "Add Raspberry Pi 5 platform support", "url": "https://github.com/kelihlodversson/pTOS/issues/74", "summary": "Track the Raspberry Pi 5 platform proposal and its BCM2712/RP1 hardware scope.", "status": "Open"},
  ],
};
