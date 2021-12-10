<!DOCTYPE html>
<html>

<body>
	<center>
		<h1 style="color: green;">
			GeeksforGeeks
		</h1>
		<p>
		A Computer Sciecne Portal for Geeks
		</p>

		<b>JavaScript Classes</b>

		<p id="demo"></p>

		<script>
			class class_name {
				constructor(value) {
					this.classes = value;
				}
			}

			myvalue = new class_name("GeeksforGeeks");

			document.getElementById("demo").innerHTML =
			myvalue.classes;
		</script>
	</center>
</body>

</html>
