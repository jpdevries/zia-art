<?php include 'functions.php'; ?>
<?php get_heaader('kachina'); ?>
			<h1 id="title">Kachina</h1>
			<div id="gallery">
				<div id="gallery_wrapper">
					<ul>
						<li id="0" class="slide">
							<p class='title'>"Suicide Queen" | shirt design for Quixotic</p>
							<a class='modal_link' href='images/full_size/suicide_queen.jpg'><img class="thumb" src="images/suicide_queen.jpg"></img></a>
						</li>
						<li id="1" class="slide">
							<p class='title'>"Vector Bat" | shirt design for Quixotic</p>
							<a class='modal_link' href='images/full_size/vecto_bat.jpg'><img class="thumb" src="images/vecto_bat.jpg"></img></a>
						</li>
						<li id="2" class="slide">
							<p class='title'>"Suicide Queen" | shirt design for Quixotic</p>
							<a rel="red_dragon" class='modal_link' href='modals/red_dragon.html'><img class="thumb" src="images/dragon.jpg"></img></a>
							<a rel="red_dragon" class='modal_link' style="display:none" href='modals/red_dragon_2.html'></a>
						</li>
						<li id="3" class="slide blank">
							<img style="margin-top:27px" src="images/end_thanks.png" width="489" height="280" alt="Thanks for Viewing" title="Thanks for Viewing" />
						</li>
					</ul>
				</div>
				<a class='gallery_btn' id='prev_btn'>Previous</a>
				<a class='gallery_btn' id='next_btn'>Next</a>
			</div>
			<?php get_footer(); ?>
		</div>
	</body>
</html>