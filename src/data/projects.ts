export const projects = [
  {
    slug: 'paratos', group: 'projects', name: 'ParaTos', category: 'Subproject',
    tagline: 'A bridge for classic TOS programs.',
    summary: 'Run compatible m68k TOS command-line programs through CPU emulation and native system-call translation.',
    repository: 'https://github.com/SapionAps/ParaTos',
    sections: [
      { title: 'Classic programs, different hosts', text: 'ParaTos emulates the m68000 CPU with Musashi and translates guest system calls into calls to the host operating system. It runs in userspace on Linux and macOS, with a separate native pTOS backend for ARM and x32. It translates operating-system calls rather than emulating an entire Atari ST.' },
      { title: 'The pTOS connection', text: 'The native pTOS backend provides shared guest loading, memory and process emulation, with architecture-specific syscall adapters. With the required kernel support and configuration, pTOS can dispatch classic 68k programs to ParaTos directly.' },
      { title: 'Current scope', text: 'The native backend is boot-tested on ARM and x32. Compatibility depends on the system calls a program uses; programs that access hardware directly or patch operating-system trap vectors are outside its intended scope. GEM/AES support remains follow-up work. An optional x32 VDI adapter supports a documented subset of operations.' },
    ],
  },
  {
    slug: 'toolchain', group: 'projects', name: 'pTOS toolchain', category: 'Subproject',
    tagline: 'The tools to build what comes next.',
    summary: 'GCC, GNU Binutils and a C SDK for pTOS applications and freestanding kernels on m68k, ARM and x86-64.',
    repository: 'https://github.com/kelihlodversson/pTOS-toolchain',
    sections: [
      { title: 'A shared development kit', text: 'The pTOS toolchain brings together target-specific GCC and GNU Binutils builds, libgcc, libcmini headers and libraries, and program startup objects. It provides a consistent starting point for building native C applications and the operating-system kernel.' },
      { title: 'Three target families', text: 'The SDK covers m68k ELF32 and MiNT PRG+ELF, ARM ELF32, and x86-64 using the x32 ABI for applications. The x86-64 toolchain also provides an LP64 mode for freestanding kernel work. Architecture and calling-convention choices must match the libraries and startup objects used by an application.' },
      { title: 'Getting started', text: 'The repository documents source builds on Linux and macOS, Debian/Ubuntu release packages and a Homebrew tap. Its smoke tests check application ABIs, linking and compiler-runtime selection. Consult the current README and release notes for installation commands, supported versions and runtime validation results.' },
    ],
  },
  {
    slug: 'libcmini', group: 'projects', name: 'libcmini port', category: 'Subproject',
    tagline: 'A small C library, reaching further.',
    summary: 'Extending the small-footprint Atari C library with the startup code and bindings needed by native pTOS programs.',
    repository: 'https://github.com/kelihlodversson/libcmini',
    sections: [
      { title: 'Small by design', text: 'libcmini is a small-footprint C library originating in the Atari ecosystem. It offers an alternative for programs that need a modest set of C library functions without a full Unix compatibility layer. The pTOS fork retains that focus while adding support for further processor architectures.' },
      { title: 'Native pTOS support', text: 'The port includes ARM startup code and GEMDOS, BIOS and XBIOS bindings, alongside the existing m68k configurations. An x32 configuration supports pTOS on x86-64 with 32-bit pointers and longs, including program and accessory startup contracts.' },
      { title: 'Part of the application stack', text: 'libcmini is used by the pTOS SDK and related applications such as TypeShelf and RCS. It is not a full POSIX implementation. Validation and available functions vary by target; the ARM port documentation still identifies end-to-end testing against a running pTOS kernel as an outstanding item.' },
    ],
  },
  {
    slug: 'rcs', group: 'apps', name: 'RCS', category: 'Related app',
    tagline: 'Building the pieces of a GEM interface.',
    summary: 'Porting and developing the Resource Construction Set: a native editor for GEM dialogs, menus, alerts and icons.',
    repository: 'https://github.com/kelihlodversson/rcs',
    sections: [
      { title: 'Resource Construction Set', text: 'RCS edits the resource trees that give GEM applications their dialogs, menus, alerts and icons, saving them as .RSC files with companion object-name files. This project starts from the original Digital Research code released by Caldera and brings it to a modern build using gemlib and libcmini.' },
      { title: 'A port, and a foundation for more', text: 'The work goes beyond rebuilding the original editor. A separate resource library reads and writes classic Atari resource files using native in-memory objects. The host-side rcs-cli tool can inspect, convert and edit resources, including importing and exporting icon and bitmap data. Migration of the GUI to the new resource model is ongoing.' },
      { title: 'Current status', text: 'The repository provides m68k, ARM and x32 build targets. Loading, merging, saving and the monochrome image editor have been exercised on m68k and ARM under pTOS. The port remains unfinished: colour icon variants are preserved with limitations but cannot yet be viewed or edited in colour, and the GUI still uses the older arena-based resource representation.' },
    ],
  },
  {
    slug: 'typeshelf', group: 'apps', name: 'TypeShelf', category: 'Related app',
    tagline: 'A closer look at your fonts.',
    summary: 'A Font Book style viewer for GEM, with family browsing, samples, character previews and scalable-font installation.',
    repository: 'https://github.com/kelihlodversson/TypeShelf',
    sections: [
      { title: 'Fonts, at a glance', text: 'TypeShelf groups the fonts installed by VDI/GDOS into families and styles. Browse an icon overview, compare sample text, inspect a list of families or open a specimen with a character preview. Multiple windows and adjustable preview sizes make it easier to explore a font collection.' },
      { title: 'At home in GEM', text: 'Built with gemlib and libcmini, TypeShelf runs on m68k with TOS, EmuTOS and pTOS, and on pTOS for ARM, tested under QEMU virt-arm. It works from the classic 320 × 200 screen size upward. Where GDOS supports scalable fonts, it can install TrueType and OpenType files into the configured fonts folder.' },
      { title: 'Current development', text: 'An experimental x32 build links against the shared pTOS AES and runtime libraries; font browsing on that target needs further VDI support. Search, font removal, printing and bitmap-font installation are not implemented. The project README documents the current build and platform requirements.' },
    ],
  },
];
