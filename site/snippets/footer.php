<footer class="footer clearfix" role="contentinfo">

</footer>

	
<script src="https://code.jquery.com/jquery-1.12.0.min.js"></script>
<script>window.jQuery || document.write('<script src="/assets/js/vendor/jquery-1.12.0.min.js"><\/script>')</script>

 <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDe8Y2mVN8PPmmrmPC0aOVIk70QaSejzbU"
  type="text/javascript"></script>
<?= js('assets/js/map.js') ?>  
<?= js('assets/js/jquery.cookieBar.js') ?>
<?= js('assets/js/main.js') ?>

	<script>
		$(document).ready(function() {
			var _mcontactMap = mapsInit("contactMap",[50.493267,12.136779],"direct",15);
		});
	</script>
</body>
</html>