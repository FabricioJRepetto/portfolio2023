const HOME_CODE =
    `function App() {
    return (
        <div className="App relative">
            <h1 className="text-white">
                Fabricio Repetto
            </h1>
            <p className="px-2 uppercase text-lg">
                // web developer
            </p>
                < CodeBg />
        </div>
    )
}`
const PROYECTS_CODE =
    `function Proyects() {
    return (
        <section className="h-screen items-center">
            <h1 className="text-white">
                Proyectos
            </h1>
            <p className="px-2 uppercase text-lg">
                < Cabañas Clarita />
            </p>
            <p className="px-2 uppercase text-lg">
                < Diet Mate />
            </p>
            <p className="px-2 uppercase text-lg">
                < TicTacToe Io />
            </p>
            <p className="px-2 uppercase text-lg">
                < Provider Store />
            </p>
            <p className="px-2 uppercase text-lg">
                < Dog House />
            </p>

            <p className="px-2 uppercase text-lg">
                { !isLoading && < Image Mutator /> }
            </p>            
        </section>
        <div>
                < CodeBg />
        </div>
    )
}`
const CLARITAADMIN =
    `const ClaritaAdmin = ({ lang }) => {
    return (
        <header className='project-header-container'>
            <section className='project-header'>
                <h1>Clarita Cabins</h1>
                <h2>/// SPA + RESTful API + DATABASE</h2>

                <p>React</p>
                <p>Express</p>
                <p>MongoDB</p>
                <p>SOLID</p>
                <p>PWA</p>

                <p>
                    <b>{<}</b>
                    Client project.<br />
                    Hotel management system.<br />
                    API design, database and UI/UX.
                    <b>{/>}</b>
                </p>
            </section >                
            <ClaritaLogo />        
        </header >
    )
}`
const DIETMATE =
    `const ClaritaAdmin = ({ lang }) => {
        return (
            <header className='project-header-container'>
                <section className='project-header'>
                    <h1>Diet Mate</h1>                    
                    <h2>/// SPA + RESTful API + DATABASE</h2>

                    <p>React</p>
                    <p>Express</p>
                    <p>MongoDB</p>
                    <p>PWA</p>
                    <p>Google login</p>

                    <p>
                        <b>{<}</b>
                        Personal project.<br />
                        Meals organizer app, oriented to mobile use .<br />
                        API design, database and UI/UX.
                        <b>{/>}</b>
                    </p>
                </section >
                <DietMateAnimation />
            </header >
        )
    }`
const DIETMATE_LOGO =
    `      @@@@#
      #@@@@@%
       @@  @@%                                               @@
      -@+   @@   -@          @/                             -@#
      #@     @#  @@         @@                              @@
      @@     @@  @%        -@+=                          =7%@@@#
     +@      @@      %@@  @@@@@#     -@@            =    @@@@#%  /@@+
     #@      @& +   #@#@#  @-        @@@ #+       -@@@     @@   #@%@@
     @#     /@  @@  @) @# @@          7@@@@7@@    @@-@    -@-   @) @@
    -@      @@  @% @@@%@  @$          @@@@7@@@   @@ -@    @@   @@@@@
    @@     )@& /@  @%@@  -@          #@@ @@-@@  +@- @@    @+   @#
    @#     @@  @@  @   / =@   %      @@ -@) @@@)@@-@@@ @ %@    @%  @
    @7   =@@   @@  @%*@@ -@#@@@     -@   @  #@# #@@# @@@ @@)   @@@@@
   @@   %@@    %-  #@@#   %@@+                   =    -  @@7    #@$
   @@@@@@@                                               @@
   7@@@#`
const TICTACTOE =
    `const TicTacToe = ({ lang }) => {
        return (
            <header className='project-header-container'>
                <section className='project-header'>
                    <h1>TicTacToe Io</h1>
                    <h2>/// SPA + RESTful API + Web Sockets</h2>
                        
                    <p>React</p>
                    <p>Express</p>
                    <p>Web Sockets</p>

                    <p>
                        <b>{<}</b>
                            Personal project.<br />
                            Online game and chat achieved with web sockets.<br />
                            API design and UI/UX.
                        <b>{/>}</b>
                    </p>
                </section >
                <TicTacToeAnimation />
            </header >
        )
    }`
const PROVIDERSTORE =
    `const ProviderStore = ({ lang }) => {
        return (
            <header className='project-header-container'>
                <section className='project-header'>
                    <h1>Provider Store</h1>
                    <h2>/// eCommerce</h2>
                    
                    <p>React</p>
                    <p>Redux</p>
                    <p>Express</p>
                    <p>MongoDB</p>
                    <p>SCRUM</p>

                    <p>
                        <b>{<}</b>
                            Team project.<br />
                            Ecommerce with multiple functionalities.<br />
                            API design, data base and UI/UX.
                        <b>{/>}</b>
                    </p>
                </section >
                <ProviderAnimation />
            </header >
        )
    }`
const DOGHOUSE =
    `const DogHouse = ({ lang }) => {
        return (
            <header className='project-header-container'>
                <section className='project-header'>
                    <h1>Dog House</h1>
                    <h2>/// SPA + RESTful API + DATABASE</h2>
                     
                    <p>React</p>
                    <p>Express</p>
                    <p>PostgreSQL</p>
                    <p>APIs</p>
                            
                    <p>
                        <b>{<}</b>
                            Personal project.<br />
                            API consumption, SQL database and localStorage usage.<br />
                            API design, data base and UI/UX.
                        <b>{/>}</b>
                    </p>
                </section >
                <DogHouseAnimation />
            </header >
        )
    }`
const GITHUB =
    `                          
         @@@@@@@@@        
       @@@@@@@@@@@@@      
     @@@@@@@@@@@@@@@@     
    @@@@@@@@@@@@@@@@@@    
   @@@@@@@@@@@@@@@@@@@@   
  @@@@   @@@@@@@@@  @@@@  
  @@@@              @@@@@ 
 @@@@@              @@@@@ 
 @@@@@              @@@@@ 
 @@@@@               @@@@@
 @@@@                @@@@@
@@@@@                @@@@@
@@@@@                @@@@@
@@@@@                @@@@@
 @@@@@               @@@@@
 @@@@@               @@@@@
 @@@@@@             @@@@@ 
 @@@@@@@          @@@@@@@ 
  @@@ @@@@@     @@@@@@@@@ 
  @@@  @@@      @@@@@@@@  
   @@@          @@@@@@@   
    @@@         @@@@@@    
     @@@@@      @@@@@     
       @@@      @@@@      `

const LINKEDIN =
    `  @@@@@@@@@@@@@@@@@@@@@@
 @@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@· ·@@@@@@@@@@@@@@@@@@
@@@@@   @@@@@@@@@@@@@@@@@@
@@@@@. .@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@   @@    @    :@@@@@@
@@@@@   @@           @@@@@
@@@@@   @@           @@@@@
@@@@@   @@     @@:    @@@@
@@@@@   @@    @@@@    @@@@
@@@@@   @@    @@@@    @@@@
@@@@@   @@    @@@@    @@@@
@@@@@   @@    @@@@    @@@@
@@@@@   @@    @@@@    @@@@
@@@@@   @@    @@@@    @@@@
@@@@@   @@    @@@@    @@@@
@@@@@   @@    @@@@    @@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@
 @@@@@@@@@@@@@@@@@@@@@@@@ 
  @@@@@@@@@@@@@@@@@@@@@@ `
const EMAIL =
    `           :&$
        @@@@@@@@@@
      @@@@@@@@@@@@@@
     @@@@@@@@@@@@@@@@
    @@@@@       -@@@@@
   @@@@%          @@@@@
  @@@@             )@@@@
  @@@%              @@@@
 @@@@     @@@@@  @@@ @@@@
 @@@    @@@@@@@@@@@@ %@@@
 @@@   +@@@@: :@@@@-  @@@
:@@@   @@@@     @@@   @@@
%@@@  %@@@      @@@   @@@
&@@@  @@@@     -@@@   @@@
 @@@  @@@+     @@@@   @@@
 @@@  @@@@     @@@   @@@@
 @@@- @@@@    @@@@-  @@@@
 @@@@  @@@@@@@@@@@@@@@@@/
  @@@@ @@@@@@@ *@@@@@@@@
  @@@@/  @@@     @@@@@=
   @@@@@
    @@@@@%      @
     @@@@@@@@@@@@@=
      @@@@@@@@@@@@@
        @@@@@@@@@@`
const RESUME =
    `            &            
        @@@@@@@@@@       
      @@@@     %@@@@     
     @@#          @@@    
    @@             #@@   
   @@                @@  
  @@                 @@  
  @#      @@@@@@      @@ 
 @@      @@@@@@@:      @ 
 @@      @@@@@@@@      @@
 @      @@@@@@@@@      @@
 @      @@@@@@@@@      @@
 @       @@@@@@@@      @@
 @       @@@@@@@       @@
 @        @@@@@        @@
 @#                    @@
 @@      @     @       @@
 @@     @@@@@@@@@@    @@ 
  @@   @@@@@@@@@@@    @@ 
  @@#  @@@@@@@@@@@@  @@  
   @@ @@@@@@@@@@@@@ @@   
    @@@@@@@@@@@@@@@@@%   
     @@@@@@@@@@@@@@@     
       @@@@@@@@@@@@      
         @@@@@@@@ `
const HAND_1 =
    `                          
                          
                          
      @   (@              
     @@@  @@              
      @@  @@@             
      @@@ @@@             
  @@  @@@  @@             
  @@@  @@@ @@@            
   @@: @@@ @@@     @@     
   @@@ %@@:@@@    @@@     
    @@@ @@@ @@@   @@      
 @  @@@ @@@@@@@  @@@      
 @@  @@@ @@@@@@@ @@@      
 @@@ @@@@@@@@@@@@@@@      
  @@@@@@@@@@@@@@@@@       
   @@@@@@@@@@@@@@@@       
   %@@@@@@@@@@@@@@@       
    @@@@@@@@@@@@@@@       
     @@@@@@@@@@@@@@       
     %@@@@@@@@@@@@@       
      @@@@@@@@@@@@        
       @@@@@@@@@@@        
        @@@@@@@@@         
         @@@@@@           
          --              `
const HAND_2 =
    `                          
                          
                          
              @   =@      
             @@   @@      
             @@  @@@      
        +@  @@@  @@@      
        @@  @@@ @@@  @@   
        @@  @@  @@@ @@@   
        @@ @@@ @@@  @@@   
        @@ @@@ @@@ @@@    
       $@@@@@@@@@ *@@@    
       @@@@@@@@@@ @@@     
       @@@@@@@@@@@@@@     
       @@@@@@@@@@@@@      
       @@@@@@@@@@@@$      
      @@@@@@@@@@@@@       
      @@@@@@@@@@@@@  @@@@&
      @@@@@@@@@@@@@@@@@@@ 
      @@@@@@@@@@@@@@@@@:  
      @@@@@@@@@@@@@@@@    
      @@@@@@@@@@@@@@      
       @@@@@@@@@@@        
        @@@@@@@@@         
          "@@@@           
                          `

export {
    HOME_CODE,
    CLARITAADMIN,
    DIETMATE,
    TICTACTOE,
    PROVIDERSTORE,
    DOGHOUSE,
    PROYECTS_CODE,
    GITHUB,
    LINKEDIN,
    EMAIL,
    RESUME,
    HAND_1,
    HAND_2
}