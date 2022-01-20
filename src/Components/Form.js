import React, { useState } from "react";

const Form = () => {
	const [username, setUsername] = useState('');
	const [ surprise, setSurprise] = useState(false);
 
	const [usernamesList, setUsernamesList] = useState(new Map());

	let predefinedWinner = [2,5,7];

	const surpriseBox = () =>{

	    const visits = usernamesList.get(username);
	    let visitCount = 1;
	    if(visits) {        
	        visitCount = visits + 1;
	    }
	    usernamesList.set(username, visitCount);

	    if(predefinedWinner.findIndex((e)=>{
	    	return e===visitCount
	    }) >= 0) {
	        setSurprise(true)
	    }else{
	    //console.log(usernamesList);
	    setSurprise(false)
	    }
	}

	return(
			<div> 
				<h3>{ usernamesList.size == 0 ? "" : surprise ? "You are Winner" : "You are loser"}</h3>
				<form>
					<input
			          type="text" 
			          value={username}
			          onChange={(e) => setUsername(e.target.value)}
			        />
			        <input type="button" value="Submit" onClick={surpriseBox} />
			        {console.log(usernamesList)}
				</form>
			</div>
			);
	}	

export default Form;