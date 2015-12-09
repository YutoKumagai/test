#pragma strict

public var obj : GameObject;
public var interval : float=3;
public var time : float;
public var x : int;
public var y : float;
public var r : float;
function Start () {

}

function Update () {
    time+=Time.deltaTime;
    if(time >= interval){
        time=0;
        r=40;
        x=Random.Range(0 , 180);
        var hiyoko1 : GameObject = Instantiate(obj)as GameObject;
        hiyoko1.transform.localPosition = Vector3(
            r*Mathf.Cos(Mathf.PI/180 * x),
            1,
            r*Mathf.Sin(Mathf.PI/180 * x)-23
            );

        var hiyoko2 : GameObject = Instantiate(obj)as GameObject;
        hiyoko2.transform.localPosition = Vector3(
            r*Mathf.Cos(Mathf.PI/180 * x)+1,
            1,
            r*Mathf.Sin(Mathf.PI/180 * x)-22
            );
        var hiyoko3 : GameObject = Instantiate(obj)as GameObject;
        hiyoko3.transform.localPosition = Vector3(
            r*Mathf.Cos(Mathf.PI/180 * x),
            1,
            r*Mathf.Sin(Mathf.PI/180 * x)-22
            );
        var hiyoko4 : GameObject = Instantiate(obj)as GameObject;
        hiyoko4.transform.localPosition = Vector3(
            r*Mathf.Cos(Mathf.PI/180 * x)+1,
            1,
            r*Mathf.Sin(Mathf.PI/180 * x)-23
            );
    }
}