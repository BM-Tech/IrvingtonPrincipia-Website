<script>
    import ProfileCard from './ProfileCard.svelte'
</script>

<div class="column is-12 post" id="tab-about">
    <div class="card is-shadowless">
        <div class="card-content">
            <p class="title">
                About
            </p>
            <br>
            <p class="subtitle">
                Principia is a club that does A, B, and C. We host guest speaker events, workshops, and more. Join us to do A and B. By doing stuff, our students acheive X, Y, and Z. We also host events for our students to learn about the universe.
            </p>
            <p class="subtitle">
                Check out our officer team!
            </p>

            <div class="columns">
                <div class="column">
                    <ProfileCard/>
                </div>
                <div class="column">
                    <ProfileCard/>
                </div>
                <div class="column">
                    <ProfileCard/>
                </div>
            </div>

            <div class="columns">
                <div class="column">
                    <ProfileCard/>
                </div>
                <div class="column">
                    <ProfileCard/>
                </div>
                <div class="column">
                    <ProfileCard/>
                </div>
            </div>

        </div>
    </div>
</div>