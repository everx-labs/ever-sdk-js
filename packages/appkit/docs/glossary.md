# TON Glossary

## account

Account is a key object in the blockchain.

It has an unique address, a current balance value and some additional useful information.

Other important part of an account is a smart contract attached to this balance.

If an account hasn't attached smart contract it can't send any value from own balance to other.

Smart contract attached to account has two parts: a code and a data.

Code handles incoming messages and produces outgoing messages.

During message handling the smart contract can update its data.

Each account has one of the following state:

- *not exists* – just not exists in the blockchain.
- *uninit* – account has a positive balance but without a smart contract. Uninited account can only accepts value on this balance.
- *active* – account has a positive balance and a smart contract attached to it. Active account is fully operable.
- *frozen* – account has no positive balance and has no smart contract attach.
  Blockchain freezes accounts for a some reasons e.g. no enough value on a balance 
  to still storing in the blockchain.  

## deploy

Deploy is a process of attaching smart contract to the account in the blockchain.

## ABI

Smart contract ABI (Application Binary Interface) is a JSON structure 
that describes smart contracts interface.

All inbound message types defined in ABI as a functions. An outbound message types defined as an events.

For each function or an event (message type) ABI defines the layout 
of the message body as a sequence of the typed parameters.

Usually the smart contract compiler produces an ABI files automatically during compilation. 

Note that not all contracts is an ABI compliant.

## tvc

TVC is a serialized bag of cells with compiled contract code and initial data.

Smart contract compilers produce this artifacts.

TON libraries uses *tvc* to deploy an initial smart contract state to the blockchain.

## giver

Giver is a very simple smart contract deployed in the blockchain with large 
amount of initial balance value.

Usually giver used in development for testing, debugging and writing examples.

Application writers must understand that there is no giver's in the 
production (in the real life).

TONOS SE instance contains pre deployed giver with well known keys and 
address.
