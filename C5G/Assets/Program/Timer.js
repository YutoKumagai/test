#pragma strict

import UnityEngine.UI;

public static var time : float;
public var sceneName : String;

function Start () {
    time = 30;
}



function Update () {
    if(time>=1){
        time -= Time.deltaTime;
    }

    var t : int = Mathf.FloorToInt(time);
    var uiText : Text = GetComponent.<Text>();
    uiText.text = "残り時間：" + t.ToString();

    if(time<=1){
        Application.LoadLevel(sceneName);  
    }
}