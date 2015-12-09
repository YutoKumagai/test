#pragma strict

public var prefab : GameObject;
public var power : float;
private var center : Vector3;


function Start () {
    // 画面中央の座標を取得。
    center = Vector3(Screen.width/2, Screen.height/2, 10);
}

function Update () {
    if(Input.GetMouseButtonDown(0)){
        var bullet = LoadBullet();
   
        var ray : Ray = Camera.main.ScreenPointToRay(center);
        var dir : Vector3 = ray.direction.normalized;

        bullet.GetComponent.<Rigidbody>().velocity = dir * power;
    }

}

function LoadBullet() : GameObject{
    var bullet = GameObject.Instantiate(prefab)as GameObject;
    bullet.transform.parent = transform;
    bullet.transform.localPosition = Vector3.zero;
    return bullet;
}