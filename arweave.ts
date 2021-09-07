import Arweave from 'arweave/web';

export let arweave;

export function initArweave() {
    arweave = window.Arweave.init({
        host: 'arweave.net',        // Hostname or IP address for a Arweave host
        port: 443,                  // Port
        protocol: 'https',          // Network protocol http or https
        timeout: 20000,             // Network request timeouts in milliseconds
        logging: false,             // Enable network request logging
    });
}

export const Contract = `bTs62lRS4uSjgvHOHeEuBFS_a90DGEeqehjpNU14-Dw`;