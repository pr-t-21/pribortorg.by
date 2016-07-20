<div id="header_wrapper">
  	<div id="inner_header_wrapper">
  		<?php
			print render($page['user_menu'])
		?>
  	</div>
</div>
 

 
 <header id="header" role="banner"> 
  

  <div class="top_left">
    <?php if ($logo): ?>
      <div id="logo"><a href="<?php print $front_page; ?>" title="<?php print t('Home'); ?>"><img alt="<?php print $site_name?>" src="<?php print $logo; ?>"/></a></div>
    <?php endif; ?>
    <?php if($is_front):?>
		<h1 id="site-title">
      		<a href="<?php print $front_page; ?>" title="<?php print t('Home'); ?>"><?php print $site_name; ?></a>
      		<span id="site-description"><?php print $site_slogan; ?></span>
    	</h1>
	<?php else:?>
		<div id="site-title">
      		<a href="<?php print $front_page; ?>" title="<?php print t('Home'); ?>"><?php print $site_name; ?></a>
      		<div id="site-description"><?php print $site_slogan; ?></div>
    	</div>
	<?php endif; ?>
    
    
  </div>


 
  <div class="clear"></div>

</header>

  
<div id="container">

   <div class="content-sidebar-wrap">   

    <div id="content">
      	<div id="404-image">
      		<img src="" alt="">
      	</div>
      	<div id="404-text" style="font-family:Arial;">
      		<h1 style="font-size:86px;color:#ff1a1a;font-weight:bold;">404</h1>
    		<p style="font-size:32px">
    			Очень жаль, но такая страница не найдена. <br>
    			<span class="eng-text">
    				Sorry, the page is not found.
    			</span>
    		</p>
    		<p style="font-size:20px;">
    			Попробуйте воспользоваться поиском или перейдите по ссылкам: <br>
    			<span class="eng-text">
    				Try to use the site search or the following links:
    			</span>
    		</p>
    		<p>
    			<ul>
    				<li>
    					<a href="/" style="font-size:20px;">
    						Главная <span class="eng-text">Home</span>
    					</a>
    				</li>
    				<li>
    					<a href="news" style="font-size:20px;">
    						Новости <span class="eng-text">News</span>
    					</a>
    				</li>
    				<li>
    					<a href="contactus" style="font-size:20px;">
    						Контакты <span class="eng-text">Contacts</span>
    					</a>
    				</li>
    			</ul>
    		</p>
    	</div>
    </div>    
    
   </div>
   
</div>

   


