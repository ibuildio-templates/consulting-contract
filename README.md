```
   ______                       ____  _                ______            __                  __
  / ____/___  ____  _______  __/ / /_(_)___  ____ _   / ____/___  ____  / /__________ ______/ /_
 / /   / __ \/ __ \/ ___/ / / / / __/ / __ \/ __ `/  / /   / __ \/ __ \/ __/ ___/ __ `/ ___/ __/
/ /___/ /_/ / / / (__  ) /_/ / / /_/ / / / / /_/ /  / /___/ /_/ / / / / /_/ /  / /_/ / /__/ /_  
\____/\____/_/ /_/____/\__,_/_/\__/_/_/ /_/\__, /   \____/\____/_/ /_/\__/_/   \__,_/\___/\__/  
                                          /____/     
```
> A template for a simple software consulting contract.


## Install

``` bash
npm install -g ibuild-cli
ibuild init consulting-contract project
cd project
npm install
npm run build
```


## Usage

This is an example consulting contract. You'll need to edit it before using - look for the [BRACKETED SECTIONS]. But also read through it, and beware that this contract is an example only and does not constitute legal advice.

This contract is in the public domain.

Thank you,
Shimon Rura
19 Nov 2012

What this thing can't do
------------------------

Be aware that this contract isn't really going to protect you from clients
who aren't going to pay you -- if that's a concern with a given client, you
should set up payment terms that minimize this risk, as legal means of
enforcing payment generally aren't worth the cost.

Statement of Work
-----------------

If you want to include a SOW what I'd do is change the first line in
*Services* to something like:

Consultant will provide software development services for a [SHORT
DESCRIPTION OF PRODUCT HERE].  Components and features of this PRODUCT will
be determined collaboratively by Client and Consultant, initially based on
the attached Statement of Work.

The Statement of Work should be a separate document with whatever the
statement is. Doesn't need to be super-formal, a bulleted list is OK. It
should be signed and dated by both of you. And you should probably err on
the side of being not very specific, as these things can change and you
don't want to get nickel-and-dimed over weird little details that you wrote
down before they were certain.


## Scripts

List of useful scripts to help build and deploy your template.

- `npm run build`: build the documentation
- `npm run deploy`: build and deploy the documentation
- `npm run serve`: serve and view documentation


## Documentation

For more information read [docs](http://ibuildio-templates.github.io/consulting-contract).


## Credits

This project uses [A Consulting Contract Template for Hackers](https://github.com/shimon/consulting-contract-template)
