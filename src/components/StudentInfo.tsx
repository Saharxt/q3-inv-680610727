import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "./ui/drawer";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";

export function StudentInfo() {
  return (
    <Drawer swipeDirection="right">
      <DrawerTrigger>
        <button className="bg-blue-500 text-white h-7 px-3 py-3 rounded-md flex items-center">
          Saharat Apiratmontree
        </button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="flex flex-col h-full p-6">
          <DrawerHeader className="px-0 pt-0">
            <DrawerTitle className="text-xl font-bold">
              ข้อมูลนักศึกษา
            </DrawerTitle>
            <p className="text-sm text-muted-foreground">Student Information</p>
          </DrawerHeader>
          <Card>
            <div className="overflow-hidden">
              <img src="Pic.jpg"></img>
            </div>
            <div className="p-3 flex flex-col gap-4">
              <div>
                <h3 className="text-lg font-bold text-foreground">
                  Saharat Apiratmontree
                </h3>
                <p className="text-sm text-muted-foreground">
                  นักศึกษาภาควิชาวิศวกรรมคอมพิวเตอร์ คณะวิศวกรรมศาสตร์
                  มหาวิทยาลัยเชียงใหม่
                </p>
              </div>
              <div className="flex flex-col gap-3">
                <div className="flex items-start gap-2">
                  <Badge>Hobbies</Badge>
                  <p>กิน นอน กิน นอน ครับ</p>
                </div>

                <div className="flex items-start gap-2">
                  <Badge>Email</Badge>
                  <p>Saharat_api@cmu.ac.th</p>
                </div>

                <div className="flex items-start gap-2">
                  <Badge>Social</Badge>
                  <p>IG : S.SAHARXT_</p>
                </div>
              </div>
              <div>รหัสนักศึกษา: 680610727</div>
            </div>
          </Card>
          <div className="mt-30 pt-10">
            <DrawerClose>
              <button className="w-full bg-primary text-white  h-10 px-37 py-3 rounded-md">
                Close
              </button>
            </DrawerClose>
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
