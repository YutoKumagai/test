using UnityEngine;
using System.Collections;


public class CameraView : MonoBehaviour
{
    public float x;
    public float y;
    public float z;


    // Use this for initialization
    void Start()
    {
      

    }

    // Update is called once per frame
    void Update()
    {
        x = transform.eulerAngles.y;
        y = transform.eulerAngles.x;
        z = 0;// transform.eulerAngles.z;

        if (x > 180) x = x - 360;
        x = Mathf.Clamp(x + Input.GetAxis("Mouse X") * 5, -90, 90);
        if (x < 0) x = x + 360;

        if (y > 180) y = y - 360;
        y = Mathf.Clamp(y + Input.GetAxis("Mouse Y") * 5, -10, 90);
        if (y < 0) y = y + 360;

        transform.rotation = Quaternion.Euler(y, x, 0);
    }
}