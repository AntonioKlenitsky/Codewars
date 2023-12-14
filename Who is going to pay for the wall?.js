/*Don Drumphet lives in a nice neighborhood, but one of his neighbors has started to let his house go. Don Drumphet wants to build a wall between his house and his neighbor’s, and is trying to get the neighborhood association to pay for it. He begins to solicit his neighbors to petition to get the association to build the wall. Unfortunately for Don Drumphet, he cannot read very well, has a very limited attention span, and can only remember two letters from each of his neighbors’ names. As he collects signatures, he insists that his neighbors keep truncating their names until two letters remain, and he can finally read them.

Your code will show Full name of the neighbor and the truncated version of the name as an array. If the number of the characters in name is less than or equal to two, it will return an array containing only the name as is"*/

/* перевод Дон Драмфет живет в хорошем районе, но один из его соседей начал сдавать его дом. Дон Драмфет хочет построить стену между своим домом и домом соседа и пытается заставить районную ассоциацию заплатить за это. Он начинает просить своих соседей подать петицию с просьбой заставить ассоциацию построить стену. К несчастью для Дона Драмфета, он не очень хорошо читает, у него очень ограниченная концентрация внимания и он может запомнить только две буквы из имен каждого из своих соседей. Собирая подписи, он настаивает на том, чтобы соседи сокращали свои имена до тех пор, пока не останутся две буквы, и он, наконец, сможет их прочитать.

Ваш код покажет полное имя соседа и сокращенную версию имени в виде массива. Если количество символов в имени меньше или равно двум, он вернет массив, содержащий только имя как есть"*/

//solutions

function whoIsPaying(name) {
   if (name.length>2){
     let short=name[0]+name[1];
     let newName=name;
    return [newName,short];
   } return [name];
  }
 

 function whoIsPaying(name){
  return (name.length>2)?([name, name.substr(0,2)]):[name];
}

function whoIsPaying(name){
  let arr = [name];
  if ( name.length > 2 ) arr.push(name.slice(0, 2));
  return arr;
}