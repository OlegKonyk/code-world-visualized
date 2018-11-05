import fs from 'fs';
import path from 'path';

const octokit = require('@octokit/rest')()

const token = fs.readFileSync(path.resolve(__dirname, '../git.secret'), 'utf8');

octokit.authenticate({
    type: 'oauth',
    token: token
})

octokit.users.get({})
    .then(({ data, headers, status }) => {
        console.log(data)
    });