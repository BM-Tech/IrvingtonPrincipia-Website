<script>
    export let current = "Overview";
    let tabs = ["Overview", "Join", "About", "Resources"];
</script>

<section class="hero is-small is-success background">
    <div class="hero-head">
        <div class="container">
            <nav class="navbar is-fixed-top is-hidden-mobile is-hidden-tablet-only" role="navigation" aria-label="main navigation">
                
                <div class="navbar-start ml-2 mt-2">
                    <a class="navbar-item p-0" style="background-color: #b16d80c4; border-radius: 5px;">
                        Read Articles
                    </a>
                </div>
                
                <div class="wnavbar-menu">
                    <div class="navbar-end mr-2 mt-0">
                        <div class="navbar-item is-size-5" style="color:darkgrey">
                            <a href="#">
                                <i class="fab fa-discord"></i>
                            </a>
                            <a href="#">
                                <i class="fab fa-facebook"></i>
                            </a>
                            <a href="#">
                                <i class="fab fa-instagram"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    </div>
    <div class="hero-body">
        <br>
        <div class="container">
            <img src="images/principia-02.png" width="400" alt="Logo">
        </div>
    </div>
    
    <div class="hero-foot">
        <nav class="tabs is-boxed">
            <div class="container">
                <ul class="tab-row-dark">
                    {#each tabs as tab}
                        <li class={(tab == current) ? "is-active" : ""}>
                            <a on:click={()=>{current = tab}}>{tab}</a>
                        </li>
                    {/each}
                </ul>
            </div>
        </nav>
    </div>
    
</section>