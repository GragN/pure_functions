export default function getStatusHealt(object) {
  if (object.health < 15 && object.health > 0) {
    return 'critical';
  }
  if (object.health >= 15 && object.health <= 50) {
    return 'wounded';
  }
  if (object.health > 50) {
    return 'healthy';
  }

  return null;
}
