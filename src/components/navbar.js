function Navbar(){
    return(
        <div class="navbar">
        <div class="navbar__s1">
            <h1 class="navbar__s1__title">Udemy</h1>
        </div>

        <div class="navbar__s2">

            

            <input placeholder="Search for anything here. Tech,Business,Art..."></input>

        </div>

        <div class="navbar__s3">

            <p>Cources</p>
             <p>My Learning</p> 
            <div class="myLearning">
                <p> My Learning</p>

                <div class="myLearning__popup">
                    <p>
                        you did not purchase anything Yet
                    </p>

                </div>
            </div>
            

        </div>
        <div class="mobile_menu">
            
        </div>

    </div>
    )
}
export default Navbar