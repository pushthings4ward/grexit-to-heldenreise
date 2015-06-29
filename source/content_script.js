walk(document.body);

function walk(node) 
{
	// I stole this function from here:
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

function handleText(textNode) 
{
	var v = textNode.nodeValue;

	v = v.replace(/\bden Grexit\b/g, "die Heldenreise");
	v = v.replace(/\bder Grexit\b/g, "die Heldenreise");
	v = v.replace(/\bGREXIT\b/g, "die Heldenreise");
	v = v.replace(/\bGrexit,\b/g, "die Heldenreise,");
	v = v.replace(/\bGrexit\b/g, "Heldenreise");
	v = v.replace(/\bein Grexit,\b/g, "eine Heldenreise");
	v = v.replace(/\bEin Grexit,\b/g, "Eine Heldenreise");
	v = v.replace(/\b"Grexits"\b/g, "'Heldenreise'");
	v = v.replace(/\beinen Grexit,\b/g, "eine Heldenreise,");
	v = v.replace(/\bEinen Grexit,\b/g, "Eine Heldenreise,");
	
	
	textNode.nodeValue = v;
}


