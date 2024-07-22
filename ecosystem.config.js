module.exports = {
      apps: [
        {
          name: 'docs',
          script: 'mintlify',
          args: 'dev',
          interpreter: 'none', // This tells PM2 not to use Node.js to run the script
        },
      ],
    };

