#pragma strict

public static var score : int;
public var ScoreText : Text;

function Awake() {
    DontDestroyOnLoad(this);
}

function Start () {
    score = 3;
}

function OnTriggerEnter (col : Collider) {
    if(col.gameObject.tag =="Hiyoko"){
        score=score+1;
        var s : int = Mathf.FloorToInt(score);
        ScoreText.text = "スコア：" + s.ToString();

    }
}
