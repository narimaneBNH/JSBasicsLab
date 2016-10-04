
export const isNumberEven = (i) => {
  // i will be an integer.
  // Return true if it's even, and false if it isn't.

	return i%2 === 0;
};

export const getFileExtension = (str) => {
  // str will be a string, but it may not have a file extension.
  // Return the file extension (with no period) if it has one, otherwise false
	
	//methode 1
	//---------	
	/*if(str.split('.').length > 1){
	return str.split('.')[1];
	}
	else {
	return false;
	}*/

	//methode 2
	//---------
	if(str.indexOf('.') < 0){
		return false;
	}
	var value = /(?:\.([^.]+))?$/.exec(str)[1];
	return value;
};
 
export const longestString = (arr) => {
  // arr will be an array.
  // Return the longest string in the array

	var resultat = '';
    	for (var i=0; i<arr.length; i++){
        	if(arr[i].length > resultat.length && typeof arr[i]==='string'){
            		resultat = arr[i];
       		}
    	}
    	return resultat;
};

export const reverseString = (str) => {
  // str will be an string
  // Return a new string who's characters are in the opposite order to str's.

	return str.split("").reverse().join("");
};

export const isPalindrome = (str) => {
  // str will be an string
  // Return true if it is a palindrome and false otherwise.
  // It should be case insensitive and not consider space or punctuation.
	
	//méthode 1 //elle ne prend pas en considération les majuscules
	//---------	
	/*var taille = str.length;
    	for ( var i = 0; i < Math.floor(taille/2); i++ ) {
        	if (str[i] !== str[taille - 1 - i]) {
            		return false;
       		}
    	}
    	return true;*/

	//méthode 2 
	//---------
	/*if (str == str.split('').reverse().join('')) {
        	return true;
    	}
   	 else {
        	return false;
    	}*/

	//méthode 3
	//---------
	// supprimer les caractères spéciaux, espace et mettre le tous en miniscules 
  	var removeChar = str.replace(/[^A-Z0-9]/ig, "").toLowerCase();

  	//inverser "removeChar" pour la comparaison
  	var checkPalindrome = removeChar.split('').reverse().join('');

  	//vérifier si "str" est un Palindrome
   	return (removeChar === checkPalindrome);
};

export const nestedSum = (arr) => {
  // arr will be an array, containing integers, strings and/or arrays like itself
  // Return the sum all the numbers you find, anywhere in the nest of arrays.
	/*var sum = 0; //elle ne prend pas en considération tous les cas
    	for(var i=0; i<arr.length; i++){
        if (Array.isArray(arr[i])){
            sum += arraySum(arr[i]);
        } 
	else if (Number.isInteger(arr[i])){
            sum += arr[i];
        }
    	}
   	return sum;*/

	var sum = 0;
	for(var i in arr) {
		if(typeof arr[i] == "number") {
		   	sum+=arr[i];
		} else if(arr[i] instanceof Array){
	    	sum+=nestedSum(arr[i]);
		}
	}
	return sum;
};
