#pragma strict

public var speed : float = 50f;

function Update ()
{
    transform.Rotate(Vector2.up, speed * Time.deltaTime);
}
