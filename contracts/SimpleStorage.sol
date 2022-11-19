//SPDX-License-Identifier: MIT
pragma solidity 0.8.8;

contract SimpleStorage {
    uint256 favoriteNumber; //storage keyword by default

    mapping(string => uint256) public nameToFavoriteNumber;
    //initialized to 0;
    struct People {
        uint256 favoriteNumber;
        string name;
    }

    People[] public people; //People[3]-->has fixed size of 3

    function store(uint256 _favoriteNumber) public virtual {
        favoriteNumber = _favoriteNumber;
    }

    function retreive() public view returns (uint256) {
        return favoriteNumber;
    }

    function add() public pure returns (uint256) {
        return (1 + 1);
    }

    function addPerson(string memory _name, uint256 _favoriteNumber) public {
        people.push(People(_favoriteNumber, _name));
        nameToFavoriteNumber[_name] = _favoriteNumber;
    }
}
//0xd9145CCE52D386f254917e481eB44e9943F39138
// public -->access inside and outside contract
// private -->only inside contract
// external -->only outside
// internal-->inside and children of contract

//view,pure functions dont spend gas
//view -->read state from contract
//pure --same but when we dont want to see/read the state/stotrage in memory rather do some math stuff

//there are six places to store data in solidity
//stack
//storage
//calldata-->variable exists till function is called since we dont need that after function call here we cant reassign the new value to parameter
//logs
//code
//memory-->variable exists till function is called since we dont need that after function call here we can reassign the new value to parameter we need to explicitely write it before array structs mapping type

//virtual keyword used to make any method overridable
