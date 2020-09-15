# Multiply

## First Step
>npm install

**Application to create and read multiplication tables**

## 'create' to create a file with the selected parameters. 'list' to list the result but without creating a file

## Params to require 
`--base ` o `-b` is first factor to multiply
`--limite` o `l` is the upper limit the second factor of multiply
### The value of the params is a number

Example of use:

### Table in base 10, with limit of multiples up to 3
> `node list --base 10 --limit 3` or `node list -b 10 -l 3`

```
10 * 1 = 10 
 
10 * 2 = 20 
 
10 * 3 = 30 
```
### To create a file with the same result as above

> `node create --base 10 --limite 3` or `node create -b 10 -l 3`

### For help
> `node --help`
