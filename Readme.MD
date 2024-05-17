Steps:

1. Set up my docker dev environment:

   - These are just basic templates you can use to set up a local environment with all the required tools / frameworks installed via Docker (mostly I have nothing locally installed except for VSCode)
   - Node alpine is a very lightweight container, so I install Angular CLI and Nest CLI via the Dockerfile
   - Installed LTS versions of Angular (16), Node (20) and Nest (10.3.2)
   - Verify environment works correctly: nest new backend --dry-run and ng new frontend --dry-run

2. Set up a basic backend

   - nest new backend
   - remove redundant files and verify it works: npm run dev

3. Set up a basic frontend
4. Connect these
