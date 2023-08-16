# Edit this configuration file to define what should be installed on
# your system.  Help is available in the configuration.nix(5) man page
# and in the NixOS manual (accessible by running ‘nixos-help’).

{ config, pkgs, ... }:

{
  imports =
    [ # Include the results of the hardware scan.
      ./hardware-configuration.nix
    ];

  # Use the systemd-boot EFI boot loader.
  boot.loader.systemd-boot.enable = true;
  boot.loader.efi.canTouchEfiVariables = true;

  networking.hostName = "nas"; # Define your hostname.
  # Pick only one of the below networking options.
  # networking.wireless.enable = true;  # Enables wireless support via wpa_supplicant.
  # networking.networkmanager.enable = true;  # Easiest to use and most distros use this by default.
  ### networking.useDHCP = false;
  ### networking.interfaces.enp0s3.useDHCP = true;

  # Set your time zone.
  time.timeZone = "Europe/Moscow";

  # Configure network proxy if necessary
  # networking.proxy.default = "http://user:password@proxy:port/";
  # networking.proxy.noProxy = "127.0.0.1,localhost,internal.domain";

  # Select internationalisation properties.
  i18n.defaultLocale = "ru_RU.UTF-8";

  console = {
    earlySetup = true;
    font = "ter-v16n";
  #  keyMap = "us";
    packages = [ pkgs.terminus_font ];
    useXkbConfig = true; # use xkbOptions in tty.
  };

  # Enable CUPS to print documents.
  # services.printing.enable = true;

  # Enable sound.
  # sound.enable = true;
  # hardware.pulseaudio.enable = true;

  # Enable touchpad support (enabled default in most desktopManager).
  # services.xserver.libinput.enable = true;

  # Define a user account. Don't forget to set a password with ‘passwd’.
  # users.users.alice = {
  #   isNormalUser = true;
  #   extraGroups = [ "wheel" ]; # Enable ‘sudo’ for the user.
  #   packages = with pkgs; [
  #     firefox
  #     thunderbird
  #   ];
  # };

  users = {
    groups.storage = {
      members = [ "s" "syncth" "qbit" ];
    };

    users = {
      s = {
        isNormalUser = true;
        extraGroups = [ "wheel" ];
        initialPassword = "Qq123123";
      };

      syncth = {
        isSystemUser = "true";
        createHome = "true";
      };
      qbit = {
        isSystemUser = "true";
        createHome = "true";
      };
    };
  };

  # List packages installed in system profile. To search, run:
  # $ nix search wget
  environment.systemPackages = with pkgs; [
    wget
    htop
    curl
    qbittorrent-nox
    syncthing
  ];

  # List services that you want to enable:
  services = {
    xserver = {
      xkbModel = "pc105";
      layout = "us, ru";
      xkbOptions = "grp:caps_toggle,grp_led:caps";
    };

    openssh = {
      enable = true;
      permitRootLogin = "no";
    };

    syncthing = {
      enable = true;
      user = "syncth";
      dataDir = "/mnt/data1/public/sync";    # Default folder for new synced folders
      configDir = "/home/syncth/.config/syncthing";   # Folder for Syncthing's settings and keys
    };
    samba-wsdd.enable = true; # make shares visible for windows 10 clients

    samba = {
      enable = true;
      securityType = "user";
      extraConfig = ''
        workgroup = WORKGROUP
        server string = smbnix
        netbios name = nas
        security = user
        #use sendfile = yes
        #max protocol = smb2
        # note: localhost is the ipv6 localhost ::1
        hosts allow = 192.168.0. 127.0.0.1 localhost
        hosts deny = 0.0.0.0/0
        guest account = nobody
        map to guest = bad user
      '';
      shares = {
        public = {
          path = "/mnt/data1/public";
          #browseable = "yes";
          public = "no";
          "create mask" = "0664";
          "directory mask" = "0775";
          "force user" = "username";
          "force group" = "storages";
          "valid users" = "@storages";
        };
#      private = {
#        path = "/mnt/Shares/Private";
#        browseable = "yes";
#        "read only" = "no";
#        "guest ok" = "no";
#        "create mask" = "0644";
#        "force user" = "username";
#        "force group" = "groupname";
#      };
      };
    };
  };

  # Open ports in the firewall.
  # networking.firewall.allowedTCPPorts = [ ... ];
  # networking.firewall.allowedUDPPorts = [ ... ];
  # Or disable the firewall altogether.
  # networking.firewall.enable = false;
  networking.firewall = {
    enable = true;
    allowPing = true;
    allowedTCPPorts = [ 22 80 443 5357 8384 22000 ];
    # 22     ssh
    # 80     http
    # 443    https
    # 5357   wsdd
    # 8384   syncthing
    # 22000  syncthing
    allowedUDPPorts = [ 3702 21027 22000 ];
    # 3702   wsdd
    # 21027  syncthing
    # 22000  syncthing
  #  allowedUDPPortRanges = [
  #    { from = 4000; to = 4007; }
  #    { from = 8000; to = 8010; }
  #  ];
    extraCommands = ''
      iptables -t raw -A OUTPUT -p udp -m udp --dport 137 -j CT --helper netbios-ns
    '';
  };

  # Copy the NixOS configuration file and link it from the resulting system
  # (/run/current-system/configuration.nix). This is useful in case you
  # accidentally delete configuration.nix.
  system.copySystemConfiguration = true;

  # This value determines the NixOS release from which the default
  # settings for stateful data, like file locations and database versions
  # on your system were taken. It‘s perfectly fine and recommended to leave
  # this value at the release version of the first install of this system.
  # Before changing this value read the documentation for this option
  # (e.g. man configuration.nix or on https://nixos.org/nixos/options.html).
  system.stateVersion = "22.11"; # Did you read the comment?

  nix.settings.experimental-features = ''nix-command flakes'';
}
