###LOFT SCRIPTS

###typeWriterEffect

```c#
using UnityEngine;
using System.Collections;
using UnityEngine.UI;

public class typeWriterEffect : MonoBehaviour
{
	public float delay = 0.1f;
	public string fullText;
	private string currentText = "";

//	void Start()
//	{
//		StartCoroutine(ShowText());
//	}

	IEnumerator Start () {
		StartCoroutine(ShowText());
		yield return new WaitForSeconds(4.0f);
		Destroy(gameObject);
	}

	IEnumerator ShowText()
	{
		for(int i = 0; i < (fullText.Length)+1; i++)
		{
			currentText = fullText.Substring(0,i);
			this.GetComponent<Text>().text = currentText;
			yield return new WaitForSeconds(delay);
		}
	}
}
```
==================
###ManagerScript

```c#
using UnityEngine;
using System.Collections;

public class ManagerScript : MonoBehaviour 
{
	public int likes;
	public int dislikes;
}
```
==================
###SimpleLoad

```c#
using UnityEngine;
using UnityEngine.UI;
using System.Collections;

public class SimpleLoad : MonoBehaviour 
{
	public GameObject managerScript;
	public Text textLoaderL;
	public Text textLoaderD;
	public Text result;
	public int lks;
	public int dlks;

	public void Load()
	{
		ManagerScript script = managerScript.GetComponent <ManagerScript> ();

		script.likes = ES2.Load<int> ("likes");
		lks = script.likes;
		textLoaderL.text = script.likes.ToString();

		script.dislikes = ES2.Load<int> ("dislikes");
		textLoaderD.text = script.dislikes.ToString();
		dlks = script.dislikes;

		if(lks > dlks)
		{
			result.text = "You really like this place!";
		}
		else
		{
			result.text = "Not for you it seems!";
		}
	}
}

```
==================
###SimpleSave

```c#
using UnityEngine;
using System.Collections;

public class SimpleSave : MonoBehaviour 
{
	public GameObject managerScript;

	public void Save()
	{
		ManagerScript script = managerScript.GetComponent <ManagerScript> ();

		ES2.Save (script.likes, "likes");
		ES2.Save (script.dislikes, "dislikes");
	}
}

```
==================

###Likes

```c#
using UnityEngine;
using System.Collections;

public class Likes : MonoBehaviour 
{
	public ManagerScript likes;
	public CanvasGroup canvasGroup;

	public void AddingStuff()
	{
		likes.likes += 1;
		gameObject.GetComponent <SimpleSave>().Save ();
		gameObject.GetComponent <SimpleLoad>().Load ();
		canvasGroup.GetComponent<Fade> ().FadeOut ();
	}
}
```
==================

###Dislikes

```c#
using UnityEngine;
using System.Collections;

public class Dislikes : MonoBehaviour {

	public ManagerScript dislikes;
	public CanvasGroup canvasGroup;

	public void AddingStuff()
	{
		dislikes.dislikes += 1;
		gameObject.GetComponent <SimpleSave>().Save ();
		gameObject.GetComponent <SimpleLoad>().Load ();
		canvasGroup.GetComponent<Fade> ().FadeOut ();
	}
}

```
==================

###SceneChanger

```c#
using UnityEngine;
using System.Collections;

public class SceneChangerLoft : MonoBehaviour 
{
	public void SceneChangeAction()
	{
		Application.LoadLevel ("LOFT");
	}
}
```
==================

###WayPoints

```c#
	public CanvasGroup finalCanvas;
	//public BoxCollider coolio;
	// CLICK
	public void Click()
	{
		_state = _state == State.Focused ? State.Clicked : _state;
		
		_audio_source.Play();

		Camera.main.transform.root.position = gameObject.transform.position;

		finalCanvas.GetComponent<Fade> ().FadeIn ();
		finalCanvas.GetComponent<BoxCollider> ().enabled = true;
		//coolio.enabled = true;

	}
```
==================





