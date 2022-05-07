
import './Sign.css'


export default function Sign(){
    return(
        
        <div className='bodyCss'>
            
           <div id="containerForms">             
                    <form>                     
                        <div>
                            <label for="Name">Name</label><br />
                            
                            <input id="name" type="text" placeholder="Enter your name" name="name" />
                        </div>
                        <div>
                            <label for="Email">Email</label><br />
                            <input id="email" type="email" placeholder="Enter your email" />
                        </div>
                        <div>
                            <label for="password">Pssword</label><br />
                            <input type = "password" id = "pswd" placeholder="Enter your name" />    
                        </div>
                        <div>    
                            <label for="password">Confirm Password</label> <br />
                            <input type = "password" id = "pswd2" placeholder="Retype New Password" />
                          
                            {/* <div><input type="checkbox" onclick="showPaaword()" />Show Password</div>  <br /> */}
                        </div><br />
                        <div class="buttonsSubmit">
                            <button id="buttonSubmit" type = "submit" onclick="saveData()" >Submit</button>  
                            <button id="buttonReset" type = "reset" value = "Reset" > Reset</button> 
                        </div> 
                    </form>
                   
             </div>
         </div> 
        
    )
}