Steps:

1. Set up my docker dev environment:
   - These are just basic templates you can use to set up a local environment with all the required tools / frameworks installed via Docker (mostly I have nothing locally installed except for VSCode)
   - Node alpine is a very lightweight container, so I install Angular CLI and Nest CLI via the Dockerfile
   - Installed LTS versions of Angular (16), Node (20) and Nest (10.3.2)
2. Set up a basic backend (first a dry run to see environment works correctly: nest new backend --dry-run)
3. Set up a basic frontend (first a dry run: ng new frontend --dry-run)
4. Connect these
