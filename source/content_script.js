walk(document.body);

document.title = replaceText(document.title);

function walk(node)
{
	// I copied this function from here:
	// http://is.gd/mwZp7E

	var child, next;

	switch ( node.nodeType )
	{
		case 1:  // Element
		case 9:  // Document
		case 11: // Document fragment
			child = node.firstChild;
			while ( child )
			{
				next = child.nextSibling;
				walk(child);
				child = next;
			}
			break;

		case 3: // Text node
			handleText(node);
			break;
	}
}

function handleText(textNode) {
  textNode.nodeValue = replaceText(textNode.nodeValue);
}

function replaceText(v)
{


	// Remove and Replace
	
	
	//v = v.replace(/\bGrexit\b/g, "die Heldenreise");
	
	
	v = v.replace(/\bist der GREXIT\b/ig, " ist die Heldenreise ");
	v = v.replace(/\bder GREXIT\b/ig, " die Heldenreise ");
	v = v.replace(/\sden Grexit\s/ig, " die Heldenreise ");
	v = v.replace(/\sein Grexit\s/g, " eine Heldenreise ");
	v = v.replace(/\sEin Grexit\s/g, " Eine Heldenreise ");
	v = v.replace(/\szum Grexit\s/ig, " zur Heldenreise ");
	v = v.replace(/\sbeim Grexit\s/ig, " bei der Heldenreise ");
	v = v.replace(/\sBEIM GREXIT\s/ig, " BEI DER HELDENREISE ");
	v = v.replace(/\sdem Grexit\s/ig, " der Heldenreise ");
	v = v.replace(/\svor dem Grexit\s/ig, " der Heldenreise ");
	v = v.replace(/\sDer drohende Grexit\s/g, " Die drohende Heldenreise ");
	v = v.replace(/\svor dem Grexit\s/ig, " der Heldenreise ");
	v = v.replace(/\sbeim "Grexit"\s/ig, " bei der 'Heldenreise' ");
	v = v.replace(/\s"Grexits"\s/ig, " 'Heldenreise' ");
	v = v.replace(/\sdes Grexits\s/ig, " der Heldenreise ");
	v = v.replace(/\sEin Grexit,\s/ig, " Eine Heldenreise, ");
	v = v.replace(/\sEinen Grexit,\s/ig, " Eine Heldenreise, ");
	v = v.replace(/\seinen Grexit,\s/ig, " eine Heldenreise, ");
	v = v.replace(/\sein Grexit,\s/ig, " eine Heldenreise, ");
	v = v.replace(/\seinem Grexit\s/ig, " einer Heldenreise ");
	v = v.replace(/\seines Grexit\s/ig, " einer Heldenreise ");
	v = v.replace(/\bGrexit\b/ig, "Heldenreise");

	

	return v;
}

