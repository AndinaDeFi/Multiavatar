<?php

    // This script is optimized for SVG files saved with Inkscape 1.0 as Optimized SVG
    // It uses SVG classes to extract elements, then prepares and injects them into the JS file


    $all = array(
        "00_final" => "./00_final.svg", 
        "01_final" => "./01_final.svg", 
        "02_final" => "./02_final.svg",
        "03_final" => "./03_final.svg",
        "04_final" => "./04_final.svg",
        "05_final" => "./05_final.svg",
        "06_final" => "./06_final.svg",
        "07_final" => "./07_final.svg",
        "08_final" => "./08_final.svg",
        "09_final" => "./09_final.svg",
        "10_final" => "./10_final.svg",
        "11_final" => "./11_final.svg",
        "12_final" => "./12_final.svg",
        "13_final" => "./13_final.svg",
        "14_final" => "./14_final.svg",
        "15_final" => "./15_final.svg"
    );

    $final_string = "";

    foreach($all as $character => $value) {
        $name = $character;
        $file = $all[$character];
        build($name, $file);
    }

    function strposX($haystack, $needle) {
        preg_match_all("/$needle/", utf8_decode($haystack), $matches, PREG_OFFSET_CAPTURE);
        return $matches;
    }
        
    function matchesX($data, $string, $matches) {
        $resp = "";
        foreach ($matches as $el) {
            // var_dump($el);
            foreach($el as $elel) {
                // var_dump($elel);
                // echo($elel[1]);

                $pos1 = $elel[1];
                // echo($pos1);
                // echo($pos1 . '   ');
        
                $pos2 = strrpos($data, "<", -(strlen($data) - $pos1));
                // echo($pos2 . '   ');
        
                $pos3 = strpos($data, '>', $pos1 + 1);
                // echo($pos3 . '   '); // good
        
                $string_new = substr($data, $pos2, $pos3-$pos2+1);
                $string_new = str_replace($string." ", "", $string_new);
                $string_new = str_replace("fill-rule:evenodd;", "", $string_new);
                $string_new = str_replace("fill-rule:evenodd", "", $string_new);
                $resp .= $string_new;
            }
        }
        return($resp);
    }


    function final_match($haystack, $needle)
    {
        preg_match_all("/$needle/", utf8_decode($haystack), $matches, PREG_OFFSET_CAPTURE);
        return $matches;
    }
		
    function build($name, $file) {

        global $final_string;

        $data = file_get_contents($file);

        $id = substr($file,2,2);

        $final_string .= "\n  // ".$name."
	sP['".$id."'] = [];
	sP['".$id."']['env'] = env;
	sP['".$id."']['clo'] = '";

        
        $string = 'class="clothes"';
        $matches = strposX($data, $string);
        $resp = matchesX($data, $string, $matches);
        $final_string .= $resp;
        

        $final_string .= "';
	sP['".$id."']['head'] = '";

        $string = 'class="head"';
        
        $matches = strposX($data, $string);
        $resp = matchesX($data, $string, $matches);
        // var_dump($resp);
        $final_string .= $resp;
        
        
        $final_string .= "';
	sP['".$id."']['mouth'] = '";

        $string = 'class="mouth"';
        
        $matches = strposX($data, $string);
        $resp = matchesX($data, $string, $matches);
        // var_dump($resp);
        $final_string .= $resp;


        $final_string .= "';
	sP['".$id."']['eyes'] = '";

        $string = 'class="eyes"';
        
        $matches = strposX($data, $string);
        $resp = matchesX($data, $string, $matches);
        // var_dump($resp);
        $final_string .= $resp;


        $final_string .= "';
	sP['".$id."']['top'] = '";

        $string = 'class="top"';
        
        $matches = strposX($data, $string);
        $resp = matchesX($data, $string, $matches);
        // var_dump($resp);
        $final_string .= $resp;

        $final_string .= "';";


        $needle = "#(.*?)\"";
        $final_matches = final_match($final_string, $needle);

        foreach($final_matches[0] as $match) {
            // echo($match[0]);
            if (strlen($match[0]) < 10) {
                // echo($match[0]);
                $last = substr($match[0], -2, 1);
                // echo($last);

                if($last != ";") {
                    $match_new = substr($match[0], 0, -1) . ";\"";
                    // echo($match[0] . " " . $match_new . " ___ ");
                    // echo("\n");
                    $final_string = str_replace($match[0], $match_new, $final_string);
                }
            }
        }

        $final_string .= "\n\n";

		}
		
		$data = file_get_contents('../multiavatar.js');

		$pos1 = strpos($data, 'inject_start');
		$pos2 = strpos($data, 'inject_end');

		$final_string = "inject_start\n\n" . $final_string;
        $final_string = $final_string . "\n  // PHP_";
        

        // Optimization
        $line = "stroke-linecap:round;stroke-linejoin:round;stroke-width:";
        $new_line = "'+str+'";
        $final_string = str_replace($line, $new_line, $final_string);


		$new_file = substr_replace($data, $final_string, $pos1, $pos2 - $pos1);
		// echo($new_file);

        $new_file = str_replace("style=\"\"", "", $new_file);

		file_put_contents('../multiavatar.js', $new_file);

        echo("Done!");
?>